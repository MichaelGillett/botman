var restify = require('restify');
var builder = require('botbuilder');

// Create bot and add dialogs
var botman = new builder.BotConnectorBot({ 
    appId: 'Botman', 
    appSecret: 'YourAppSecret' });

botman.add('/', new builder.CommandDialog()
    .matches('^i\'m botman', function(session) {
        session.send('No, I\'m Botman');
    })
    .matches('^i\'m batman', function(session) {
        session.send('What a weird name. Why would you want to be named after an animal?');
    })
    .matches('^you\'re great', function(session) {
        session.send('Thanks, have a cookie!');
    })
    .matches('^botlight', function(session) {
        session.send('What\'s wrong?');
    })
    .matches('^na na na na na na na na na na na na na na na na', function(session) {
        session.send('Botman!');
    })
    .matches('^sodium sodium sodium sodium sodium sodium sodium sodium sodium sodium sodium sodium sodium sodium sodium sodium', function(session) {
        session.send('Botman! You get extra internet points for the science joke');
    })
    .onDefault(function (session) {
        session.send('I\'m Botman (Imagine I said that in a very deep voice)');
    }));

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', botman.verifyBotFramework(), botman.listen());
server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.url); 
});
'use strict'

// Description:
//   Example scripts for you to examine and try out.
//
// Notes:
//   They are commented out by default, because most of them are pretty silly and
//   wouldn't be useful and amusing enough for day to day huboting.
//   Uncomment the ones you want to try and experiment with.
//
//   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = (robot) => {
  
  // 1
  var d = new Date()
  var time = d.getHours() 
   robot.respond(/hello bot/i, (res) => {
    
     if (time < 12) {
      res.reply('Good morning!')
      
    } else {
      res.reply('Good day!')

    }
      
  })
  
  // 2 random
  const fortune_cookies = ['A smile is your passport into the hearts of others.',
        'A dream you have will come true.',
        'You will become great if you believe in yourself.',
        'A very attractive person has a message for you.',
        'You already know the answer to the questions lingering inside your head.',
        'You can make your own happiness.',
        'The greatest risk is not taking one.'];

  const ask = ['today cooky', 'today fortune', 'my fortune', 'fortune',
               'cookies', 'cooky']   

      robot.respond(`/${ask.join('|')}/i`, (res) => {
        res.send(res.random(fortune_cookies))
   });
// 3 Send Messages to a room
   robot.enter((res) => {

    res.send(robot.messageRoom ('DG3PA46G7', 'Hello Again'));
     })
     robot.leave((res) => {
      res.send(robot.messageRoom ('DG3PA46G7', 'Goodbye'));
     })
   
}

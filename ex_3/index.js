let Logger =require('logplease');
let logger1 =Logger.create('NodeBC');
logger1.debug('This is a debug message')
logger1.info('Node.js is great!!')
logger1.warn('Warning, Warning, I think we have a Warning ')
logger1.error('Mayday Mayday, we have an errro, repeat.. we have an error')

let logger2 =Logger.create('another file')
logger2.warn('Hey, I have a bug in my code')
const greet = require('./app');

const result = greet('Jenkins');

if (result === 'Hello, Jenkins!') {
    console.log('TEST PASSED');
} else {
    console.error('TEST FAILED');
    process.exit(1);
}

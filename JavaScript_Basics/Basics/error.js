function treatError(error) {
    throw new Error('...');
}

function shoutName(obj) {
    try {
        console.log(obj.name.toUppercase() + '!!!');
    } catch(e) {
        treatError(e);
    } finally {
        console.log('Final')
    }
}

const obj = { name: 'Diego' }
shoutName(obj)
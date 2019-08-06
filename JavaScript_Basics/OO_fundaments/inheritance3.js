console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}

console.log('Universidade Estadual de Maringá'.reverse());

Array.prototype.first = function() {
    return this[0];
}

console.log([1, 2, 3, 4].first());

function VideoLessons(name, videoId) {
    this.name = name;
    this.videoId = videoId;
}

const class1 = new VideoLessons('Welcome', 1);
const class2 = new VideoLessons('Goodbye', 2);

console.log(class1, class2);

//Simulating new (object instancier)
function newFunction(f, ...params) {
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj;
}

const class3 = newFunction(VideoLessons, 'Hello Wolrd', 3);
const class4 = newFunction(VideoLessons, 'OO', 4);

console.log(class3, class4);
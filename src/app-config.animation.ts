const a = [
    {
        id: 'halo',
        keyframes: [
            {
                offset: 0,

                style: { opacity: 0, },
            },
            {
                offset: 1,
                style: { opacity: 0.5, },
            },
        ],
        delay: '',
        direction: 'alternate',
        duration: 1000,
        easing: '',
        iterations: 'Infinity',
    },

    {
        id: 'ficker1',
        keyframes: [
            {
                offset: 0,
                style: { opacity: 0.2, },
            },
            {
                offset: 1,
                style: { opacity: 1, },
            },
        ],
        delay: '',
        direction: 'alternate',
        duration: 300,
        easing: '',
        iterations: 'Infinity',
    },
    {
        id: 'ficker2',
        keyframes: [
            {
                offset: 0,
                style: { opacity: 0.2, },
            },
            {
                offset: 1,
                style: { opacity: 1, },
            },
        ],
        delay: '',
        direction: 'alternate',
        duration: 500,
        easing: '',
        iterations: 5,
    },
];

const animationOn = {
    id: {
        keyframes: [],
        options: {},
    },
};

for (let v of a) {
    const keyframes = [];
    v.keyframes.forEach(element => {
        const keyframe = {};
        if (element.offset) {
            Object.assign(keyframe, {
                offset: +element.offset,
            });
        }
        Object.assign(keyframe, element.style);
        keyframes.push(keyframe);
    });
    const options = {};
    if (v.delay) {
        Object.assign(options, {
            delay: v.delay,
        });
    }
    if (v.direction) {
        Object.assign(options, {
            direction: v.direction,
        });
    }
    if (v.duration) {
        Object.assign(options, {
            duration: +v.duration,
        });
    }
    if (v.easing) {
        Object.assign(options, {
            easing: v.easing,
        });
    }
    if (v.iterations) {
        let iterations;
        if (v.iterations === 'Infinity') {
            v.iterations = Infinity;

        }
        Object.assign(options, {
            iterations: +v.iterations,
        });
    }

    animationOn[v.id] = {
        keyframes: keyframes,
        options: options,
    };
}

export {
    animationOn,
}

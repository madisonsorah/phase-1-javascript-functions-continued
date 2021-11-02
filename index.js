const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
} 

const wrapAdjective = function(visual = "*") {
    return function(single = "special") {
     return `You are ${visual}${single}${visual}!`;
    }
}

wrapAdjective("%")("a dedication programmer");

const saturdayFun = function(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
    };

saturdayFun();

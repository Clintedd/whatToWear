
// In (2030) you will (meet) (Donald Trump) in (France) (for) (tweeting an abusurd image online)
// In (2030) you will (fight) (Anderson Silva) in (USA) (while) (eating a 20day old pizza)

const hairs = {
    prefix: "In year",
    short: ["2019", "2030", "2046", "2050", "2063"],
    long: ["2034", "2020", "2024", "2048", "2047"],
    medium: ["2039", "2021", "2049", "2079", "2066"],
    curly: ["2045", "2080", "2052", "2024", "2099"]
}

const eyes = {
    prefix: "you will",
    bareEyes: ["meet", "be made fun of by"],
    glasses: ["break dance with", "play peekaboo with"],
    sunGlasses: ["greet", "fight"],
    contactLenses: ["bite", "sue"]
}

const mouths = {
    sufix: "in",
    bareMouth: ["Donald Trump", "Robert Downey Jr", "Danny Pack", "Nicky Minaj"],
    lipstick: ["Ryan Christiani", "Ryan Gosling", "DJ.Khalid(cuz another one)"],
    beard: ["Kim Jong Un", "Justin Bieber", "Drake"],
    mustache: ["Keira Knightley", "John Travolta"]
}

const upperBodys = {
    bareUpper: ["Iceland", "Greenland"],
    tShirt: ["Canada", "North Korea"],
    longsleevs: ["USA", "Russia"],
    tankTop: ["Brazil", "Croatia"],
    dressShirt: ["France", "Mexico"],
    blouse: ["South Korea", "Chile"]
}

const lowerBodys = {
    bareLower: ["because you were"],
    shorts: ["after"],
    jeans: ["for"],
    skirt: ["while"],
    dressPants: ["for"],
    yogaPants: ["after"]
}

const footwears = {
    bareFoot: ["trying to fry an egg with someone else's body heat", "firing someone just because that person had a bad B/O", "finding nemo", "fighting with your 3 year old daughter"],
    snickers: ["tweeting Danny's secret", "fighting a bearcub for your last piece of them precious popeyes chicken", "listening to drake try to sing 'My heart will go on' on the show, 'Dancing with the Stars' that nobody watches"],
    converse: ["breaking someone's neck highfiving", "telling a kid Santa never bothered to visit his house because his mom's cookies were bad", "butchering a song with your voice"],
    dressShoes: ["hurling chimpanzee's feces that were thrown at you", "acting like a sassy old lady", "picking your nose"],
    highHeels: ["eating the last piece of chocolate that were given to orphans", "eating popeyes allday erday", "showing South Park to your 8 year old son thinking its a kid's show"]
}

const randomItemInArray = function (array) {
    const randomItem = Math.floor(Math.random() * array.length)
    return array[randomItem];
};

$(function() {
    $('.questions').hide();
    $('.result').hide();
    
    $('.start-button').on('click', function(e) {
        e.preventDefault();

        $('.first-section').hide();
        $('.questions').fadeIn(1000);
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const hair = $('input[name=hairstyle]:checked').val();
        const eye = $('input[name=eyestyle]:checked').val();
        const mouth = $('input[name=mouthstyle]:checked').val();
        const upperBody = $('input[name=upperbodystyle]:checked').val();
        const lowerBody = $('input[name=lowerbodystyle]:checked').val();
        const footwear = $('input[name=footwearstyle]:checked').val();

        const chosenHair = hairs[hair];
        const chosenEye = eyes[eye];
        const chosenMouth = mouths[mouth];
        const chosenUpperBody = upperBodys[upperBody];
        const chosenLowerBody = lowerBodys[lowerBody];
        const chosenFootwear = footwears[footwear];

        const hairFortune = randomItemInArray(chosenHair);
        const eyeFortune = randomItemInArray(chosenEye);
        const mouthFortune = randomItemInArray(chosenMouth);
        const upperFortune = randomItemInArray(chosenUpperBody);
        const lowerFortune = randomItemInArray(chosenLowerBody);
        const footFortune = randomItemInArray(chosenFootwear);

        


        $('.questions').hide();

        

        $('.result__div__div').append(`<h3>${hairs.prefix} ${hairFortune}, ${eyes.prefix} ${eyeFortune} ${mouthFortune} ${mouths.sufix} ${upperFortune} ${lowerFortune} ${footFortune}</h3>`)

        $('.result').fadeIn(2000);
        
    });

    $()
})

//



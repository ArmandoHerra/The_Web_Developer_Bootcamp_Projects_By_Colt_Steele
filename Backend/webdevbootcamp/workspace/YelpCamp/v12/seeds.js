var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    
    {
        name: "Yosemite National Park, California.",
        image: "https://lovelace-media.imgix.net/uploads/20/2b3a7b30-b600-0131-92da-76123c8e5fa3.jpg?w=740&h=500&fit=crop&crop=faces&auto=format&q=70",
        description: "Ninety-five percent of Yosemite National Park is designated wilderness, which means no cars, no buildings, and no electricity. Sleep under the stars and hike up to Glacier Point for a view of Yosemite Valley, Half Dome, and Yosemite Falls. Make sure you store your food properly though — black bears are common!"
    },
    {
        name: "Shenandoah National Park, Virginia.",
        image: "https://lovelace-media.imgix.net/uploads/20/2c77d6f0-b605-0131-4925-0eb5cee09ce1.jpg?w=740&h=494&fit=crop&crop=faces&auto=format&q=70",
        description: "Conveniently located just 75 miles from Washington, D.C., Shenandoah National Park makes for the perfect nature retreat. You'll find 101 miles of the Appalachian Trail and just overall peaceful, wild beauty. Hike away the weekend among the park's many waterfalls."
    },
    {
        name: "Boya Lake Provincial Park, Canada.",
        image: "https://lovelace-media.imgix.net/uploads/20/2c716550-b605-0131-568e-023a6d66c206.jpg?w=740&h=555&fit=crop&crop=faces&auto=format&q=70",
        description: "Boya Lake Provincial Park, renowned for the color and clarity of its lake, is a great place to enjoy any type of water recreation. The lake is also one of the few in the north that's warm enough for swimming. The area was carved out by glaciers, leaving many islands and lakes behind for modern campers to explore on the park's hiking trails."
    },
    {
        name: "Miyajima, Japan.",
        image: "https://lovelace-media.imgix.net/uploads/20/2c731ce0-b605-0131-e000-1e13ab793288.jpg?w=740&h=555&fit=crop&crop=faces&auto=format&q=70",
        description: "Hey, the island of Miyajima is just a short boat ride away from Hiroshima. You can pitch your tent here year-round, or rent a cabin. The island is speckled with temples if you like a little culture with your camping. But the best part of staying on Miyajima? Walking among the domesticated deer that populate the island."
    },
    {
        name: "Big Sur, California.",
        image: "https://lovelace-media.imgix.net/uploads/20/c412ead0-b605-0131-62dd-06fb61bcfb52.jpg?w=740&h=492&fit=crop&crop=faces&auto=format&q=70",
        description: "Famous around the world, Big Sur, with its wide selection of campsites, is bound to make anyone a happy camper. Pitch your tent deep among the redwoods, stream side, or right by the ocean."
    },
    {
        name: "The Isle of Arran, Scotland.",
        image: "https://lovelace-media.imgix.net/uploads/20/2a1a68c0-b607-0131-c1eb-1ea9a094ffb8.jpg?w=740&h=490&fit=crop&crop=faces&auto=format&q=70",
        description: "Not only is the Isle of Arran beautiful, but it's also full of history — as in, it's been inhabited since prehistory. The island has a wide variety of landscapes and seascapes, including rugged mountains and rolling hills. Campers can hike, sail, kayak, or cycle around the island."
    },
    {
        name: "Flamenco Beach in Culebra, Puerto Rico",
        image: "https://lovelace-media.imgix.net/uploads/20/363ba910-b864-0131-cd5b-0e51825b09f6.jpg?w=740&h=423&fit=crop&crop=faces&auto=format&q=70",
        description: "Considered by some to be the most beautiful beach in the world (!), Flamenco Beach is by far the most popular in Culebra. Pitch your tent on the beach and spend the day snorkeling, swimming, and sunbathing. Yes please."
    },
    {
        name: "Corcovado National Park, Costa Rica",
        image: "https://lovelace-media.imgix.net/uploads/20/ab358ee0-b864-0131-53f8-3e84148635f9.jpg?w=740&h=555&fit=crop&crop=faces&auto=format&q=70",
        description: "Corcovado National Park is home to five percent of the world's biodiversity — National Geographic described it as the most “geographically intense” place in the world. Camping is a great option for a visit to Costa Rica: you'll be at the heart of the rainforest, away from the country's touristy resorts."
    },
    {
        name: "Haleakalā National Park, Hawaii",
        image: "https://lovelace-media.imgix.net/uploads/20/b786b800-b865-0131-e38d-3af170fdeda8.jpg?w=740&h=555&fit=crop&crop=faces&auto=format&q=70",
        description: "Located on the island of Maui, Haleakalā National Park is home to the dormant volcano of the same name. Haleakalā is Hawaiian for 'house of the sun,' and each morning, visitors trek to the volcano's summit to watch the sunrise. Expect lots of stark volcanic landscapes but also lush vegetation as you hike through the park. If you're up for an adventure, consider a stay at one of the park's two primitive wilderness campsites, only accessible by trail."
    },
    {
        name: "Maasai Mara National Reserve, Kenya.",
        image: "https://lovelace-media.imgix.net/uploads/20/9aff3ca0-b866-0131-53f9-3e84148635f9.jpg?w=740&h=483&fit=crop&crop=faces&auto=format&q=70",
        description: "If you've always dreamed of safaris, Maasai Mara is the place to go. The ideal time to visit this large game reserve is between July and October, when you can witness the annual migration of Thomson's gazelle, zebra, and wildebeest to and from the adjoining Serengeti, in Tanzania. Camp on the banks of the Mara River and hang out with the local Maasai people, well-known for their distinctive customs and dress."
    },
    {
        name: "Sahara Desert, Morocco.",
        image: "https://lovelace-media.imgix.net/uploads/20/80b31f60-b827-0131-e340-5e0a1fa76265.jpg?w=740&h=494&fit=crop&crop=faces&auto=format&q=70",
        description: "It's hot and dry here, but it's also very picturesque. After a camel trek along the high desert dunes, settle in under the stars of the Sahara sky in a traditional Berber camp. While you're there, make sure you try your hand at sand boarding (like snowboarding, but on the sand dunes)."
    },
    {
        name: "Yellowstone National Park, USA.",
        image: "https://lovelace-media.imgix.net/uploads/20/46978b40-b828-0131-4451-4ea571a0d2d4.jpg?w=740&h=555&fit=crop&crop=faces&auto=format&q=70",
        description: "Home to the world's largest collection of geysers, Yellowstone National Park is one of the only last intact natural ecosystems in the world's temperate zone. With 67 species of mammals and 330 species of birds, Yellowstone is a great place for wildlife viewing. Make sure you pack those binoculars before you head out for a hike."
    },
    {
        name: "Lake District National Park, England.",
        image: "https://lovelace-media.imgix.net/uploads/20/4575b0e0-b829-0131-5541-52c16f551cb0.jpg?w=740&h=329&fit=crop&crop=faces&auto=format&q=70",
        description: "Lake District National Park is home to England's highest mountain and deepest lake. The park is full of rollings hills, lush green valleys, quaint English towns, and of course lots of lakes. This is a great place for cyclists, and campers will also have their pick of boating experiences. The park has many campsites and also allows for wild camping."
    },
    {
        name: "Denali National Park, Alaska.",
        image: "https://lovelace-media.imgix.net/uploads/20/0c998830-b82a-0131-540a-1ea275622aa0.jpg?w=740&h=495&fit=crop&crop=faces&auto=format&q=70",
        description: "The main focus of Denali National Park is Denali itself, otherwise known as Mount McKinley, or simply 'the great one.' Whether you're a serious mountaineer or just want a relaxing stroll, this park has a hike for you. Six million acres of open land means lots of wildlife, including black and grizzly bears ... so make sure you keep that in mind."
    },
    {
        name: "Cotopaxi National Park, Ecuador.",
        image: "https://lovelace-media.imgix.net/uploads/20/59c3c830-b863-0131-a5bd-6624e72d865b.jpg?w=740&h=487&fit=crop&crop=faces&auto=format&q=70",
        description: "Cotopaxi National Park, home to Cotopaxi, one of the most active volcanoes in the world and Ecuador's second highest peak, is bound to satisfy all your hiking adventure cravings. Pitch a tent for spectacular views and regular visits from the park's friendly llamas."
    },
    {
        name: "Lake Myvatn, Iceland.",
        image: "https://lovelace-media.imgix.net/uploads/20/5b1637f0-b860-0131-a464-12f88dcd3c12.jpg?w=740&h=522&fit=crop&crop=faces&auto=format&q=70",
        description: "Despite what its name may lead you to believe, Iceland actually has nice weather in the summer. You're going to want to have flexible dates for your Lake Myvatn camping trip: head out at the right time and you can catch an unforgettable view of the Northern Lights."
    },
    {
        name: "Jasper National Park, Canada.",
        image: "https://lovelace-media.imgix.net/uploads/20/99016e20-b861-0131-cd5a-0e51825b09f6.jpg?w=740&h=496&fit=crop&crop=faces&auto=format&q=70",
        description: "No one can say they're bored in Jasper National Park: the park offers a wide range of activities including skiing, kayaking, swimming, and fishing. This UNESCO World Heritage Site is one of the best places to enjoy the Rockies. Soak in the mountains as well as the lakes, hot springs, waterfalls, and glaciers as you trek on some of the park's 600 miles of hiking trails."
    },
    {
        name: "Sardinia, Italy.",
        image: "https://lovelace-media.imgix.net/uploads/20/c229a970-b85f-0131-c2b4-461ddcd53b08.jpg?w=740&h=492&fit=crop&crop=faces&auto=format&q=70",
        description: "Hello, beach camping! Need I say more? Enjoy the turquoise sea after spending the night in one of the region's 42 campsites. Sardinia will give you a different taste of Italy: it's actually an autonomous region, located closer to Africa than Italy, with a fiercely independent spirit. Make sure you hit up the island's towns for some of their famous cheese."
    },
    {
        name: "Ladakh, India.",
        image: "https://lovelace-media.imgix.net/uploads/20/22fe5000-b862-0131-b85a-7a05f44f4304.jpg?w=740&h=491&fit=crop&crop=faces&auto=format&q=70",
        description: "Located right between Pakistan, Tibet, and Xinjiang Province, Ladakh is one of the best places to experience the Indian Himalayas. Hey, the region isn't called the 'Land of the High Passes' for nothing. Camping here is a great way to explore the area, taking you off the beaten path, and bringing you closer to Ladakh's many Buddhist Monasteries and remote villages. If you're looking for something more active, you can also try your hand at rafting or hiking."
    },
    {
        name: "Cala Llevadó, Spain.",
        image: "https://lovelace-media.imgix.net/uploads/20/e8eca020-b85f-0131-c2b4-461ddcd53b08.jpg?w=740&h=623&fit=crop&crop=faces&auto=format&q=70",
        description: "Cala Llevadó, on Spain's Costa Brava, is located right by the ocean, in the forest. You'll be staying in the shade, steps away from beautiful beaches. Go snorkeling, climb up the neighboring mountains, or just lounge on the beach, looking out onto that sparkling blue sea."
    },
    {
        name: "Garden Route National Park, South Africa.",
        image: "https://lovelace-media.imgix.net/uploads/20/4d0656f0-b861-0131-2b0c-2ec8109f2f30.JPG?w=740&h=555&fit=crop&crop=faces&auto=format&q=70",
        description: "A perfect combination of ocean and mountain, Garden Route National Park has one of the most beautiful stretches of coastline in the continent. Hike up the peak, enjoy some mountain biking, kayak in the waves, or just kick back, relax, and enjoy the view."
    },
    {
        name: "Grand Canyon National Park, Arizona.",
        image: "https://lovelace-media.imgix.net/uploads/20/8c9817b0-b862-0131-c2b0-461ddcd53b08.jpg?w=740&h=384&fit=crop&crop=faces&auto=format&q=70",
        description: "Grand Canyon National Park has a handful of campsites that put you right on the rim of the canyon. Watch the sun rise over the Grand Canyon with a cup of coffee every morning, and wander the trails adjoining your campsite for even more breathtaking views."
    }
    
]

function seedDB() {
    var campgroundCounter = 0;
    var commentCounter = 0;
    // Remove all campgrounds.
    Campground.remove({}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("Removed Campgrounds...");
            // Add a few campgrounds.
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err) {
                        console.log(err);
                    } else {
                        campgroundCounter++;
                        console.log("Created a new campground!(" + campgroundCounter + ")...");
                        // Create a comment on each campground.
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet!",
                                author: "Homer S."
                                
                            }, function(err, comment){
                                if(err) {
                                    console.log(err);
                                } else {
                                    // Add a few comments.
                                    commentCounter++;
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created a new comment!(" + commentCounter + ")...");
                                }
                                
                            });
                    }
                });
            });
        }
    });
}

module.exports = seedDB;

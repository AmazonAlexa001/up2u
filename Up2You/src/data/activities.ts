// ─────────────────────────────────────────────────────────────────────────────
// File: src/data/activities.ts
// ─────────────────────────────────────────────────────────────────────────────
import type { Activities } from "../utils/types-extra";

// Main activity pool used by the spinner (strings only)
export const ACTIVITIES: Activities = {
  inperson: {
    Chill: [
      "Picnic at a quiet park",
      "Coffee date + people watching",
      "Browse a local bookstore",
      "Art gallery stroll",
      "Farmers' market wander",
      "Local park photography walk",
    ],
    Active: [
      "Morning jog in a new neighborhood",
      "Tandem bike ride",
      "Dance class drop-in",
      "Rock climbing gym session",
      "Yoga in the park",
      "Frisbee or catch at the park",
    ],
    Adventurous: [
      "Mini road trip to a new town",
      "Try a new hiking trail",
      "Rent scooters or bikes",
      "Thrift-store treasure hunt",
      "Arcade high-score battle",
      "Karaoke dare night",
    ],
    Creative: [
      "Pottery / paint-your-own mug studio",
      "Cook-off with 5 ingredients max",
      "Make a couple’s zine at a café",
      "Polaroid photo scavenger list",
      "DIY bouquet challenge",
      "Neighborhood photo challenge",
    ],
    Romantic: [
      "Stargazing with a blanket",
      "Sunset walk then ice cream",
      "Make dessert together + slow playlist",
      "Rooftop or viewpoint nightcap",
      "Dress-up dinner at home",
      "Recreate your first date",
    ],
    Budget: [
      "Library date—pick each other a book",
      "Free museum/day at the park",
      "Window shopping: find 3 cozy things",
      "Cook a pantry-only meal",
      "Board games at home or café",
      "Volunteer hour together",
    ],
    Cozy: [
      "Blanket fort + movie",
      "Bake cookies and swap playlists",
      "Tea tasting flight at home",
      "Puzzle + hot cocoa",
      "At-home spa night",
      "Read side-by-side for 30 minutes",
    ],
  },
  online: {
    Chill: [
      "Watch a calming nature stream",
      "Make matching phone wallpapers",
      "Pinterest board building",
      "Guided meditation together",
      "Virtual museum wander",
      "Plan a dream weekend on a map",
    ],
    Active: [
      "Follow the same YouTube workout",
      "Dance-along video challenge",
      "Stretching session with lo-fi beats",
      "Try a VR sports game",
      "Do a 7-minute workout app together",
      "Live-stream a fitness class",
    ],
    Adventurous: [
      "GeoGuessr world tour",
      "Co-op indie game speedrun",
      "Cook the same new recipe on video",
      "Language app duel for 20 minutes",
      "VR mini adventure (if available)",
      "Take a live online class",
    ],
    Creative: [
      "Draw each other from memory",
      "Write a tiny duet poem",
      "Collaborative playlist sprint (15 songs)",
      "Canva poster challenge",
      "Photo edit swap (before/after)",
      "Make a couple’s emoji set",
    ],
    Romantic: [
      "Read a short story out loud",
      "Build a shared bucket list",
      "Answer 5 deep questions each",
      "Digital dinner date + candles",
      "Write compliments lightning round",
      "Plan your next IRL date",
    ],
    Budget: [
      "Free online course together",
      "Find a free event for next week",
      "Wishlist audit & save goals",
      "Library e-card + borrow ebooks",
      "Free workout video together",
      "Meal plan for the week",
    ],
    Cozy: [
      "Tea/coffee chat with lo-fi beats",
      "Watch-together classic film",
      "Screenshare cozy games (Stardew, etc.)",
      "Photo album stroll + memories",
      "Design a cozy room in a moodboard",
      "Bedtime story swap",
    ],
  },
};

// Rich meta: optional funny quip + real fact + resource links
export const ACTIVITY_META: Record<
  string,
  {
    quip?: string;
    fact?: string;
    links?: { label: string; href: string }[];
  }
> = {
  // ——— Online-ish examples
  "Virtual museum wander": {
    quip:
      "Sure, let’s look at art online because flights to Paris aren’t in the budget.",
    fact:
      "If you spent 30 seconds on each piece at the Louvre, it would take 100+ days to see it all.",
    links: [
      { label: "Google Arts & Culture", href: "https://artsandculture.google.com/" },
      { label: "The Louvre — Online Tours", href: "https://www.louvre.fr/en/online-tours" },
      { label: "Smithsonian Collections", href: "https://collections.si.edu/" },
    ],
  },
  "Guided meditation together": {
    quip:
      "Let’s sit very still and pretend our brains aren’t opening 14 tabs a minute.",
    fact:
      "Short guided sessions can reduce stress and improve focus even after a single practice.",
    links: [
      { label: "UCLA Free Meditations", href: "https://www.uclahealth.org/programs/marc/free-guided-meditations" },
      { label: "Insight Timer", href: "https://insighttimer.com/" },
      { label: "Headspace Basics", href: "https://www.headspace.com/meditation/meditation-for-beginners" },
    ],
  },
  "Watch-together classic film": {
    quip:
      "Black-and-white movie night: like filters, but from the past.",
    fact:
      "Silent-era and Golden Age films shaped many of today’s movie tropes.",
    links: [
      { label: "Internet Archive Films", href: "https://archive.org/details/feature_films" },
      { label: "Kanopy (library access)", href: "https://www.kanopy.com/" },
      { label: "Letterboxd Lists", href: "https://letterboxd.com/" },
    ],
  },
  "GeoGuessr world tour": {
    quip:
      "Let’s get lost on purpose and pretend we know every tree by its vibe.",
    fact:
      "Players often learn road signs, architecture, and flora to pinpoint countries within seconds.",
    links: [
      { label: "GeoGuessr", href: "https://www.geoguessr.com/" },
      { label: "City Guesser (free)", href: "https://virtualvacation.us/guess" },
    ],
  },
  "Language app duel for 20 minutes": {
    quip:
      "Trash talk… but in another language. Educational chaos.",
    fact:
      "Short, daily practice builds vocabulary faster than infrequent long sessions.",
    links: [
      { label: "Duolingo", href: "https://www.duolingo.com/" },
      { label: "Memrise", href: "https://www.memrise.com/" },
    ],
  },
  "Draw each other from memory": {
    quip:
      "If your art looks bad, just say it’s abstract.",
    fact:
      "Drawing each other from memory can be a fun way to reconnect with your date.",
    links: [
      { label: "Draw Something", href: "https://drawsomething.com/" },
      { label: "Beginner drawing tips", href: "https://www.creativebloq.com/advice/how-to-draw" },
    ],
  },
  "Collaborative playlist sprint (15 songs)": {
    quip:
      "Yes, it’s a competition. Yes, you will judge each other.",
    fact:
      "Listening to music together can boost mood and cognition.",
    links: [
      { label: "Spotify", href: "https://www.spotify.com/" },
      { label: "Soundcloud", href: "https://soundcloud.com/" },
    ],
  },
  "Canva poster challenge": {
    quip:
      "Winner gets bragging rights and a questionable design award.",
    links: [
      { label: "Free Canva templates", href: "https://www.canva.com/templates/posters/" },
      { label: "Poster design tips", href: "https://99designs.com/blog/design-other/how-to-design-a-poster/" },
    ],
  },
  "Photo edit swap (before/after)": {
    quip:
      "Trust your partner with your photos… or prepare for chaos.",
    links: [
      { label: "Free online photo editors", href: "https://pixlr.com/" },
      { label: "Creative editing ideas", href: "https://www.photoworkout.com/creative-photo-editing-ideas/" },
    ],
  },
  "Write a tiny duet poem": {
    quip:
      "Couple of brains, one questionable rhyme scheme.",
    links: [
      { label: "How to write a short poem", href: "https://www.writersdigest.com/write-better-poetry/poetry-writing-tips" },
      { label: "Collaborative poetry ideas", href: "https://readpoetry.com/5-ways-to-write-a-poem-with-a-friend/" },
      { label: "Creative writing prompts", href: "https://www.creativewritingprompts.com/" },
    ],
  },
  "Read a short story out loud": {
    quip:
      "Dramatic voices encouraged, Oscar nominations pending.",
    links: [
      { label: "Free short stories online", href: "https://americanliterature.com/short-stories" },
      { label: "Free online story editors", href: "https://www.storyblocks.com/" },
    ],
  },
  "Build a shared bucket list": {
    quip:
      "Half adventure, half procrastination fuel.",
    links: [
      { label: "Bucket list ideas", href: "https://bucketlistjourney.net/bucket-list-ideas/" },
      { label: "Collaborative list tools", href: "https://trello.com/" },
    ],
  },
  "Answer 5 deep questions each": {
    quip:
      "Because nothing says bonding like mild existential dread.",
    links: [
      { label: "Deep Questions", href: "https://www.deepquestions.net/" },
      { label: "List of deep questions", href: "https://conversationstartersworld.com/deep-questions-to-ask/" },
    ],
  },
  "Digital dinner date + candles": {
    quip:
      "Romance, now available in 1080p.",
    links: [
      { label: "Virtual dinner ideas", href: "https://longdistancedating.com/virtual-date-ideas/" },
      { label: "Ambience video playlist", href: "https://www.youtube.com/results?search_query=virtual+dinner+ambience" },
    ],
  },
  "Write compliments lightning round": {
    quip:
      "Say nice things… fast. No overthinking allowed.",
    links: [
      { label: "Compliment examples", href: "https://www.happierhuman.com/compliments-examples/" },
    ],
  },
  "Plan your next IRL date": {
    quip:
      "Future you will thank you. Or curse you. TBD.",
    links: [
      { label: "Date ideas", href: "https://www.goodhousekeeping.com/life/relationships/a31405192/cute-romantic-date-ideas/" },
      { label: "Fun date ideas", href: "https://www.cosmopolitan.com/sex-love/a33408/fun-date-ideas/" },
      { label: "Date planning tools", href: "https://www.dateplanningtools.com/" },
    ],
  },

  // ——— In-person examples
  "Try a new hiking trail": {
    quip:
      "Time to walk uphill and call it ‘fun’. Bring water. And snacks. Mostly snacks.",
    fact:
      "Even light hiking can boost mood and cognition thanks to a mix of movement + nature time.",
    links: [
      { label: "AllTrails", href: "https://www.alltrails.com/" },
      { label: "National Park Service", href: "https://www.nps.gov/index.htm" },
    ],
  },
  "Board games at home or café": {
    quip:
      "Let’s ruin friendships politely with cardboard and tiny wooden cubes.",
    fact:
      "Cooperative games can improve communication and conflict-resolution skills.",
    links: [
      { label: "BoardGameGeek (top games)", href: "https://boardgamegeek.com/browse/boardgame" },
    ],
  },
  "Free museum/day at the park": {
    quip:
      "Culture and sunshine? We’re basically thriving.",
    fact:
      "Many cities offer free museum days—worth checking local calendars.",
    links: [
      { label: "Smithsonian (free museums)", href: "https://www.si.edu/visit" },
      { label: "Find free museum days", href: "https://www.google.com/search?q=free+museum+days+near+me" },
    ],
  },
  "At-home spa night": {
    quip:
      "Fancy towels, questionable cucumbers, five-star vibes at two-star prices.",
    fact:
      "Simple self-care rituals can reduce perceived stress and improve sleep quality.",
    links: [
      { label: "Self-care basics (Mayo Clinic)", href: "https://www.mayoclinic.org/healthy-lifestyle" },
    ],
  },
  "Stargazing with a blanket": {
    quip:
      "Yeah, let’s go admire burning gas balls billions of miles away… totally useful.",
    fact:
      "When you look at stars, you’re literally looking back in time—light can be millions of years old.",
    links: [
      { label: "Stellarium Web Sky Map", href: "https://stellarium-web.org/" },
      { label: "International Dark-Sky Association", href: "https://www.darksky.org/" },
    ],
  },
  "Morning jog in a new neighborhood": {
    quip:
      "It’s sightseeing, but sweaty.",
    fact:
      "Light cardio for 20–30 minutes can lift mood for hours thanks to endorphins.",
  },
  "Rock climbing gym session": {
    quip:
      "Trust falls, but vertical.",
    fact:
      "Climbing develops problem-solving and communication as much as strength.",
  },
  "Blanket fort + movie": {
    quip:
      "Architecturally unsound, emotionally correct.",
  },
  "Make a couple’s emoji set": {
    quip:
      "Your love, but in tiny pixel feelings.",
  },
  "Cook-off with 5 ingredients max": {
    quip:
      "Gordon Ramsay could never… okay maybe he could, but still.",
    links: [
      { label: "Allrecipes", href: "https://www.allrecipes.com/" },
      { label: "Random 5-ingredient recipes", href: "https://www.bbcgoodfood.com/recipes/collection/five-ingredient-recipes" },
      { label: "Pantry staple ideas", href: "https://www.allrecipes.com/gallery/recipes-with-five-ingredients-or-less/" },
    ],
  },
  "Free online course together": {
    quip:
      "We’re learning things we’ll brag about exactly once.",
    links: [
      { label: "Coursera Free Courses", href: "https://www.coursera.org/courses?query=free" },
      { label: "edX", href: "https://www.edx.org/" },
      { label: "Khan Academy", href: "https://www.khanacademy.org/" },
    ],
  },
  "Pottery / paint-your-own mug studio": {
    quip:
      "Ah yes, let's pay money to get clay under our nails... worth it.",
    fact:
      "Pottery is a great way to express your inner artist.",
    links: [
      { label: "Pottery by the Hour", href: "https://www.potterybythehour.com/" },
      { label: "Find a pottery studio near you", href: "https://www.yelp.com/search?find_desc=Pottery+Studios" },
      { label: "Beginner pottery tips", href: "https://www.craftcourses.com/blog/7-tips-for-beginners-to-pottery" },
    ],
  },
  "Make a couple’s zine at a café": {
    quip:
      "Nothing says romance like stapling poorly drawn comics together.",
    links: [
      { label: "The Zine Project", href: "https://www.zineproject.com/" },
      { label: "Zine-making 101", href: "https://www.wikihow.com/Make-a-Zine" },
      { label: "Free zine templates", href: "https://www.canva.com/templates/search/zine/" },
    ],
  },
  "Polaroid photo scavenger list": {
    quip:
      "Collect memories… and probably 17 blurry shots of your shoes.",
    links: [
      { label: "DIY scavenger hunt ideas", href: "https://www.scavengerhunt.com/blog/photo-scavenger-hunt-ideas" },
      { label: "Polaroid photography tips", href: "https://www.polaroid.com/blogs/camera-bag/how-to-take-better-polaroid-pictures" }
    ],
  },
  "Neighborhood photo challenge": {
    quip:
      "Your neighbors are definitely going to wonder what you’re doing.",
    links: [
      { label: "Flickr", href: "https://www.flickr.com/" },
      { label: "Urban photography tips", href: "https://expertphotography.com/urban-photography/" },
      { label: "Creative photo prompts", href: "https://digital-photography-school.com/photography-prompts-ideas/" },
    ],
  },
  "DIY bouquet challenge": {
    quip:
      "Who needs florists when you have questionable taste and scissors?",
    links: [
      { label: "DIY Bouquet", href: "https://www.diybouquet.com/" },
      { label: "Bouquet arranging tips", href: "https://www.teleflora.com/blog/flower-arranging/flower-arranging-tips" },
      { label: "Flower meaning chart", href: "https://www.flowermeaning.com/" },
    ],
  },
};

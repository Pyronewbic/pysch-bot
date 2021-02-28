# What you'll need for dev-work
 1. node and yarn installed (use LTS/12.xx)
 2. xcode setup with deps
 3. android studio setup (SDK VER 29, android Q/P for emulators)

# Install Your Dependencies
    yarn

# To run this on an iOs emulator
    cd ios

comment out the Flipper line (39) in AppDelegate.h

    pod install
    yarn ios

# To run this on an android emulator (use AVD)
    yarn android

# Orders of Focus

 1. Psychosis : Schizophrenic spectrum disorders.
 2. Personality dysfunctions / disorders.
 3. Substance abuse disorders.
 4. Mood, Anxiety and Affect (Emotion) Regulation disorders.
 5. Behavior, Conduct and lifestyle disorders.

# To do

 1. Hook this up to dialogflow (for basic intents)
 2. Setup a db (pref SQL) to track data from intents over time, establishing a better report.
 3. Screen: user.js (Holds userinformation, as well as graph for mood, and stats)
 4. Screen: bot.js (revamped app.js, has hamburger to switch to user, better stylesheet)

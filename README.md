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

 1. Structure project better (~/app/files ~/app/assets, ~/app/screen, ~/app/routes)
 2. Replace Javascript with Typescript (thanks r/programmerhumour)
 3. Move stylesheets
 4. Hook this up to dialogflow (for basic intents) [DONE]
 5. Setup NodeJs server, write routes for sessions.
 6. Setup a db (pref SQL) to track data from intents over time, establishing a better report.
 7. Screen: user.ts (Holds userinformation, as well as graph for mood, and stats)
 8. Screen: bot.ts (revamped app.js, has hamburger to switch to user, better stylesheet)
 9. Screen: login.ts (Holds login - oauth2 with google)
 10. Screen: register.ts (gives user access to signup on our servers - backend should have a nice salt+hash)

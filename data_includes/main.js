
PennController.ResetPrefix(null) // Shorten command names (keep this line here)
// Show the 'welcome' trial first, then all the 'experiment' trial
// then send the results and finally show the trial labeled 'final'
Sequence( "welcome", "SampleSlides", randomize("experiment"), "final" )
InitiateRecorder("https://plinglab.princeton.edu/IBEX/exptA/exptA-up.php").label("welcome")

Header(
    // We will use this global Var element later to store the participant's name
    newVar("ParticipantName")
        .global()
    ,
    // Delay of 250ms before every trial
    newTimer(250)
        .start()
        .wait()
)
.log( "Name" , getVar("ParticipantName") )
// This log command adds a column reporting the participant's name to every line saved to the results

Template("Instructions.csv",
    variable => newTrial( "welcome" ,
    newImage(variable.ImageFile)
        .size(1080, 608)
        .print()
        .center()
    ,
    newButton("Next")
        .css("font-size", "1.5em")
        .print()
        .wait()
    )
)

Template("SampleSlides.csv",
    variable => newTrial( "SampleSlides" ,
    newImage(variable.ImageFile)
        .size(1368, 462)
        .print()
        .center()
    ,
    newButton("Next")
        .css("font-size", "1.5em")
        .print()
        .wait()
    )
)

// This Template command generates as many trials as there are rows in myTable.csv
Template( "myTable.csv" ,
    // Row will iteratively point to every row in myTable.csv
    variable => newTrial( "experiment" ,
        // The actual recording trials and comics start here
        newImage(variable.ImageFile)
            .size(1368, 462)
            .print()
            .center()
            .log()
        ,

        newMediaRecorder("recording", "audio")
            .css("font-size", "1.5em")
            .print()
            .log()
            .wait()
        ,
        newButton("Next")
            .css("font-size", "1.5em")
            .print()
            .wait()
    )
)


// Spaces and linebreaks don't matter to the script: we've only been using them for the sake of readability
newTrial( "final" ,
    newText("<p>Thank you for your participation!</p>")
            .css("font-size", "1.5em")
            .print()
    ,
    newImage("Slide26.png")
            .size(1080, 608)
            .print()
            .center()
    ,
    // Uploads the recordings
    UploadRecordings("sendAsync", "noblock")
    ,
    newButton("Finish")
            .css("font-size", "1.5em")
            .print()
            .wait()
        )


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
        .print()
        .center()
    ,     
    newButton("Next")
        .print()
        .wait()
    )
)

Template("SampleSlides.csv",
    variable => newTrial( "SampleSlides" ,
    newImage(variable.ImageFile)
        .size(912, 308)
        .print()
        .center()
    ,     
    newButton("Next")
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
            .size(912, 308)
            .print()
            .center()
            .log()
        ,
        
        newMediaRecorder("recording", "audio")
            .print()
            .log()
            .wait()
        ,
        newButton("Next")
            .print()
            .wait()
    )
)


// Spaces and linebreaks don't matter to the script: we've only been using them for the sake of readability
newTrial( "final" ,
    newText("<p>Thank you for your participation!</p>")
            .print()
    ,
    newImage("Slide26.png")
            .print()
            .center()
    ,
    // Uploads the recordings
    UploadRecordings("sendAsync", "noblock")
    ,
    newButton("Finish")
            .print()
            .wait()
        )


PennController.ResetPrefix(null) // Shorten command names (keep this line here)
InitiateRecorder("https://plinglab.princeton.edu/IBEX/exptA/exptA-up.php").label("intro")

// Show the 'intro' trial first, then all the 'recordTrial' trial
// then send the results and finally show the trial labeled 'final'
Sequence( "welcome", "experiment", "final" )


// What is in Header happens at the beginning of every single trial
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

newTrial( "welcome" ,
    newImage("Slide1.png")
        .print()
    ,
    newButton("Next")
        .print()
        .wait()
    ,
    newImage("Slide2.png")
        .print()
    ,
    newButton("Next")
        .print()
        .wait()
    ,
    newImage("Slide3.png")
        .print()
    ,
    newButton("Next")
        .print()
        .wait()
    ,
    newImage("Slide4.png")
        .print()
    ,
    newButton("Next")
        .print()
        .wait()
    ,
    newImage("Slide5.png")
        .print()
    ,
    newButton("Next")
        .print()
        .wait()
    ,
    newImage("Slide6.png")
        .print()
    ,
    newButton("Next")
        .print()
        .wait()
    ,
    newImage("Slide7.png")
        .print()
    ,
    newButton("Next")
        .print()
        .wait()
    ,
    newImage("Slide8.png")
        .print()
    ,
    newButton("Next")
        .print()
        .wait()
    ,
    newImage("Slide9.png")
        .print()
    ,
    newButton("Next")
        .print()
        .wait()
)


// This Template command generates as many trials as there are rows in myTable.csv
Template( "myTable.csv" ,
    // Row will iteratively point to every row in myTable.csv
    variable => newTrial( "experiment" ,
        // The actual recording trials and comics start here
        newImage(variable.ImageFile)
            .print(),
        newMediaRecorder("recording", "audio").print().log().wait()
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
    // Uploads the recordings
    UploadRecordings("sendAsync", "noblock")
        )

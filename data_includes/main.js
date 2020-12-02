// This is a simple demo script, feel free to edit or delete it
// Find a tutorial and the list of availalbe elements at:
// https://www.pcibex.net/documentation/

PennController.ResetPrefix(null) // Shorten command names (keep this line here)

// Show the 'intro' trial first, then all the 'experiment' trials in a random order
// then send the results and finally show the trial labeled 'bye'
Sequence( "intro", "recordTrial", "final" )


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

InitiateRecorder("https://plinglab.princeton.edu/IBEX/exptA/exptA-up.php").label("intro")

newTrial( "intro" ,
    newImage("Slide1.jpeg")
        .print(),
    newButton("Next")
        .print()
        .wait(),
    newImage("Slide2.jpeg")
        .print(),
    newButton("Next")
        .print()
        .wait(),
    newImage("Slide3.jpeg")
        .print(),
    newButton("Next")
        .print()
        .wait(),
    newImage("Slide4.jpeg")
        .print(),
    newButton("Next")
        .print()
        .wait(),
    newImage("Slide5.jpeg")
        .print(),
    newButton("Next")
        .print()
        .wait(),
    newImage("Slide6.jpeg")
        .print(),
    newButton("Next")
        .print()
        .wait(),
    newImage("Slide7.jpeg")
        .print(),
    newButton("Next")
        .print()
        .wait(),
    newImage("Slide8.jpeg")
        .print(),
    newButton("Next")
        .print()
        .wait(),
    newImage("Slide9.jpeg")
        .print(),
    newButton("Next")
        .print()
        .wait()
)


// This Template command generates as many trials as there are rows in myTable.csv
Template( "myTable.csv" ,
    // Row will iteratively point to every row in myTable.csv
    row => newTrial( "experiment" ,
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

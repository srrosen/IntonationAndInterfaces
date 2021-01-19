
PennController.ResetPrefix(null) // Shorten command names (keep this line here)
// Show the 'welcome' trial first, then all the 'experiment' trial
// then send the results and finally show the trial labeled 'final'
function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
        }
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
///putting in the questions
// Sequence( randomize("questions") )

// newTrial( "questions" ,
//   newText("What is the sentence in the yellow dialog box doing?").print()
//   ,
//   newScale("Giving information", "Requesting information", "I can't tell")
//     .labelsPosition("right")
//     .print()
//     .wait()
// )
// newTrial( "questions" ,
//   newText("What did the speaker of the speaker of the yellow dialog box think in the previous panel?").print()
//   ,
//   newScale("The opposite of what's in the yellow box", "What's in the yellow box", "I can't tell")
//     .labelsPosition("right")
//     .print()
//     .wait()
// )
// newTrial( "questions" ,
//   newText("Who has more information about what's in the yellow dialog box?").print()
//   ,
//   newScale("The person saying it", "The person they're talking to", "They both know the same amount", "I can't tell")
//     .labelsPosition("right")
//     .print()
//     .wait()
// )
//////

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
         newText("q1", "What is the sentence in the yellow dialog box doing?")
            .css("font-size", "1.5em")
         ,
         newScale("scale1", "Giving information", "Requesting information", "I can't tell")
            .css("font-size", "1.5em")
            .labelsPosition("right")
            .once()
         ,
         newText("q2", "What did the speaker of the speaker of the yellow dialog box think in the previous panel?")
            .css("font-size", "1.5em")
         ,
         newScale("scale2", "The opposite of what's in the yellow box", "What's in the yellow box", "I can't tell")
            .css("font-size", "1.5em")
            .labelsPosition("right")
            .once()
         ,
         newText("q3", "Who has more information about what's in the yellow dialog box?")
            .css("font-size", "1.5em")
         ,
         newScale("scale3", "The person saying it", "The person they're talking to", "They both know the same amount", "I can't tell")
            .css("font-size", "1.5em")
            .labelsPosition("right")
            .once()
         ,
        newVar("question", "")
        ,
        getVar("question")
            .set(v => getRandomInt(3))
        ,
        getVar("question")
            .test.is("0")
            .success(
                getText("q1").print(),
                getScale("scale1")
                .print()
                .wait())
                .log()
            .test.is("1")
            .success(
                getText("q2").print(),
                getScale("scale2")
                .print()
                .wait()
                .log()
                )
            .test.is("2")
            .success(
                getText("q3").print(),
                getScale("scale3")
                .print()
                .wait()
                .log()
                )
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

/*
*
*	This is an example of how to use PCIBex to record audio
*	To see how this works, add this .js file to an experiment on https://expt.pcibex.net/
*	Once you understand it, you can implement the logic of recording into the actual experimental tasks we run.
*
*/


// Initiates PennController
PennController.ResetPrefix(null);


// Sets the order of events
Sequence( 
        "intro" 
        ,
        "recordTrial"
    )


// Gets the audio recorder ready
InitiateRecorder("https://plinglab.princeton.edu/IBEX/exptA/exptA-up.php").label("intro")

//introduction and instructions
NewTrial(
newImage("2fishRoundTank.png")
    .print(),
newImage("2fishRoundTank.png")
    .print(),
newImage("2fishRoundTank.png")
    .print(),
newImage("2fishRoundTank.png")
    .print(),
newImage("2fishRoundTank.png")
    .print(),
newImage("2fishRoundTank.png")
    .print(),
newImage("2fishRoundTank.png")
    .print(),
newImage("2fishRoundTank.png")
    .print(),
newImage("2fishRoundTank.png")
    .print(),
)   

Template( variable => 
    newTrial("recordTrial",
    // The actual recording trials and comics start here
         newImage(variable.ImageFile)
         .print(),
         newButton("Next")
        .print()
        .wait(),
        newMediaRecorder("happiness", "audio").print().log().wait()
        newImage(variable.ImageFile)
         .print(),
         newButton("Next")
        .print()
        .wait(),
        newMediaRecorder("happiness", "audio").print().log().wait()
        newImage(variable.ImageFile)
         .print(),
         newButton("Next")
        .print()
        .wait(),
        newMediaRecorder("happiness", "audio").print().log().wait()
        newImage(variable.ImageFile)
         .print(),
         newButton("Next")
        .print()
        .wait(),
        newMediaRecorder("happiness", "audio").print().log().wait()
        newImage(variable.ImageFile)
         .print(),
         newButton("Next")
        .print()
        .wait(),
        newMediaRecorder("happiness", "audio").print().log().wait()
        newImage(variable.ImageFile)
         .print(),
         newButton("Next")
        .print()
        .wait(),
        newMediaRecorder("happiness", "audio").print().log().wait()
        newImage(variable.ImageFile)
         .print(),
         newButton("Next")
        .print()
        .wait(),
        newMediaRecorder("happiness", "audio").print().log().wait()
        newImage(variable.ImageFile)
         .print(),
         newButton("Next")
        .print()
        .wait()
        newMediaRecorder("happiness", "audio").print().log().wait()
        newImage(variable.ImageFile)
         .print(),
         newButton("Next")
        .print()
        .wait(),
        newMediaRecorder("happiness", "audio").print().log().wait()
        newImage(variable.ImageFile)
         .print(),
         newButton("Next")
        .print()
        .wait(),
        newMediaRecorder("happiness", "audio").print().log().wait()
        newImage(variable.ImageFile)
         .print(),
         newButton("Next")
        .print()
        .wait(),
        newMediaRecorder("happiness", "audio").print().log().wait()
        newImage(variable.ImageFile)
         .print(),
         newButton("Next")
        .print()
        .wait(),
        newMediaRecorder("happiness", "audio").print().log().wait()
        newImage(variable.ImageFile)
         .print(),
         newButton("Next")
        .print()
        .wait()
        newMediaRecorder("happiness", "audio").print().log().wait()
        newImage(variable.ImageFile)
         .print(),
         newButton("Next")
        .print()
        .wait(),
        newMediaRecorder("happiness", "audio").print().log().wait()
        newImage(variable.ImageFile)
         .print(),
         newButton("Next")
        .print()
        .wait(),
        newMediaRecorder("happiness", "audio").print().log().wait()
        newImage(variable.ImageFile)
         .print(),
         newButton("Next")
        .print()
        .wait(),
        newMediaRecorder("happiness", "audio").print().log().wait()
    )

newTrial( "final" ,
newText("<p>Thank you for your participation!</p>")
        .print()
,
   // newTrial("recordTrial", 
     //   newText("Please record yourself saying goodbye angrily").print()
       // ,
        //ewMediaRecorder("sadness", "audio").print().log().wait()
    )


    // Uploads the recordings
    UploadRecordings("sendAsync", "noblock")

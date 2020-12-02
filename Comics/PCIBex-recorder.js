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


// The actual recording trials
newTrial("recordTrial",
    newText("Please record yourself saying goodbye happily").print()
    ,
    newMediaRecorder("happiness", "audio").print().log().wait()
)

newTrial("recordTrial", 
    newText("Please record yourself saying goodbye angrily").print()
    ,
    newMediaRecorder("sadness", "audio").print().log().wait()
)


// Uploads the recordings
UploadRecordings("sendAsync", "noblock")
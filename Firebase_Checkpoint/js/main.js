function makeBold(){
    if( document.getElementById("divfeedback").style.fontWeight == "bold"){
        document.getElementById("divfeedback").style.fontWeight = "100";
    }
    else{
    document.getElementById("divfeedback").style.fontWeight = "bold";
    }
}

function makeItalic(){
    if(document.getElementById("divfeedback").style.fontStyle == "italic"){
        document.getElementById("divfeedback").style.fontStyle = "normal";
    }
    else{
    document.getElementById("divfeedback").style.fontStyle = "italic";
    }
}

function makeunderline(){
    if( document.getElementById("divfeedback").style.textDecoration == "underline"){
        document.getElementById("divfeedback").style.textDecoration = "none";
    }
    else{
    document.getElementById("divfeedback").style.textDecoration = "underline";
    }
}

function changeSize(){
    
    document.getElementById("divfeedback").style.fontSize =  document.getElementById("selectsize").value;
}

function changePolice(){
    document.getElementById("divfeedback").style.fontFamily =  document.getElementById("selectpolice").value;
}


$(".course1").hover(function(){
    $(".btnCourses1").toggleClass('btnCourses1Hover')
})

$(".course2").hover(function(){
    $(".btnCourses2").toggleClass('btnCourses1Hover')
})

$(".course3").hover(function(){
    $(".btnCourses3").toggleClass('btnCourses1Hover')
})

$(".course4").hover(function(){
    $(".btnCourses4").toggleClass('btnCourses1Hover')
})

$(".course5").hover(function(){
    $(".btnCourses5").toggleClass('btnCourses1Hover')
})

$(".course6").hover(function(){
    $(".btnCourses6").toggleClass('btnCourses1Hover')
})

$(".course7").hover(function(){
    $(".btnCourses7").toggleClass('btnCourses1Hover')
})

$(".course8").hover(function(){
    $(".btnCourses8").toggleClass('btnCourses1Hover')
})

$(".course9").hover(function(){
    $(".btnCourses9").toggleClass('btnCourses1Hover')
})


$(".open").on("click", function(){
    $(".popup, .popup-content").addClass("active");
    });

    $(".close, .popup").on("click", function(){
        $(".popup, .popup-content").removeClass("active");
        });

$(".course1").click(function(){
    $("#fade").modal({
        fadeDuration: 100
      });
    })
    
    $(".course2").click(function(){
        $("#fade").modal({
            fadeDuration: 100
          });
        })

        $(".course3").click(function(){
            $("#fade").modal({
                fadeDuration: 100
              });
            })
            $(".course4").click(function(){
                $("#fade").modal({
                    fadeDuration: 100
                  });
                })
                $(".course5").click(function(){
                    $("#fade").modal({
                        fadeDuration: 100
                      });
                    })
                    $(".course6").click(function(){
                        $("#fade").modal({
                            fadeDuration: 100
                          });
                        })
                        $(".course7").click(function(){
                            $("#fade").modal({
                                fadeDuration: 100
                              });
                            })
                            $(".course8").click(function(){
                                $("#fade").modal({
                                    fadeDuration: 100
                                  });
                                })
                                $(".course9").click(function(){
                                    $("#fade").modal({
                                        fadeDuration: 100
                                      });
                                    })
   


//Initialize Firebase
function submitForm(){
    var namevalue = document.getElementById("name").value;
    var trackvalue = document.getElementById("track").value;
    var emailvalue =  document.getElementById("email").value;
    var phonevalue =  document.getElementById("phone").value;
    const db = firestore.collection("contactData");
    db.doc(emailvalue)
    .set({
    name: namevalue,
    track: trackvalue,
    email: emailvalue,
    phone: phonevalue
    })
    .then(function(){
    console.log("Data Saved");
    alert("Data Saved");
    })
    .catch(function(error){
        console.log(error);
        alert(error);
    });
}

function deleteForm(){
    var emailvalue =  document.getElementById("email").value;
    const db = firestore.collection("contactData");
    db.doc(emailvalue).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}






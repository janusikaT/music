SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() {
    SC.stream('/tracks/57025489',function(sound){
      $('#start').click(function(e) {
           e.preventDefault();
           sound.start();
         });
      $('#stop').click(function(e) {
            e.preventDefault();
            sound.stop();
         });

      });
  });

  SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
  });
  $(document).ready(function() {
      SC.stream('/tracks/694626199',function(sound){
        $('#start1').click(function(e) {
             e.preventDefault();
             sound.start();
           });
        $('#stop1').click(function(e) {
              e.preventDefault();
              sound.stop();
           });

        });
    });

    SC.initialize({
      client_id: '340f063c670272fac27cfa67bffcafc4'
    });
    $(document).ready(function() {
        SC.stream('tracks/411961458',function(sound){
          $('#start2').click(function(e) {
               e.preventDefault();
               sound.start();
             });
          $('#stop2').click(function(e) {
                e.preventDefault();
                sound.stop();
             });

          });
      });

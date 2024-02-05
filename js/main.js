$(document).ready(function () {
  // $("selector").event(function(){

  // body
  //}

  function hello() {
    $("#btn").click(() => {
        /**
         * ele.addclass("classname")
         */

        $("#btn").addClass("beautiful-btn")

        // selector.html(" content")
        $("h1").html(" this is subham ")
    });

    /**
     *
     * ele.css('property' , 'value')
    *
     */
}
hello();
});

function change(){
  document.getElementById('image1').src="assets/image1_2.jpg";
  document.getElementById('image2').src="assets/image2_2.jpg";
  document.getElementById('image3').src="assets/image3_2.jpg";
  document.getElementById('image4').src="assets/image4_2.jpg";
  document.getElementById('image5').src="assets/image5_2.jpg";
}
// pour changer les images une par une :
/*
function change(image){
  image.src = 'assets/' + image.id + '_2.jpg';
}
*/
// il faut mettre this dans les paranthèses de onmouseover="change()"

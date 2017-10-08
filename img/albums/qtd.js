var totalAlbuns = 13;


$('#navGalleryItem').append(liList());

//verify quantity of pages from nav
function liList() {
  let ul;
  const modss = totalAlbuns % 4;
  let qtNav = modss > 0 ? parseInt(13/4) : parseInt(13/4) -1; // there will be always at least one li already done
  let count = 1;
  var listOfLi = '<li class="page-item"><a class="page-link" href="#">1</a></li>';

  ul =  '<ul class="pagination text-center">' +
         '     <li class="page-item">' +
        '       <a class="page-link" href="#" aria-label="Previous">' +
          '        <span aria-hidden="true">&laquo;</span>' +
          '       <span class="sr-only">Previous</span>' +
          '       </a>' +
          '     </li>' ;
  for(;qtNav != 0; qtNav--) {
    count++;
    listOfLi += '<li class="page-item"><a class="page-link" href="#">'+count+'</a></li>';
  }
  
ul += listOfLi;
 ul += '   <li class="page-item"> '+
       '         <a class="page-link" href="#" aria-label="Next">'+
       ' <span aria-hidden="true">&raquo;</span>'+
       ' <span class="sr-only">Next</span>'+
      '</a>'+
      '        </li>'+
      '      </ul>';
  
  return ul;
}
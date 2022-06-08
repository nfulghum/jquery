let moviesList = [];

$(function () {
    $('#movie-form').on('submit', function (e) {
        e.preventDefault();
        let title = $('#title').val();
        let rating = $('#rating').val();

        let movieData = { title, rating };
        const HTMLtoAppend = createMovieDataHTML(movieData);

        moviesList.push(movieData);

        $('#movie-table').append(HTMLtoAppend);
        $('#movie-form').trigger('reset');
    });



})



function createMovieDataHTML(data) {
    return `
      <tr>
        <td>${data.title}</td>
        <td>${data.rating}</td>
        <td>
          <button class="btn">
            Delete
          </button>
        </td>
      <tr>
    `;
}
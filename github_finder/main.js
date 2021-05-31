$(document).ready(function() {
  $("#searchUser").on("keyup", function(e) {
    let username = e.target.value;
    ///ajax Request
    $.ajax({
      url: "http://api.github.com/users/" + username,
      data: {
        client_id: "d12006b9cddbbf99bcab",
        client_secret: "bf47bc66a048a5c1d1606cc10aaa0a67c4d0f1d0"
      }
    }).done(function(user) {
      $("#profile").html(`
      <div><h3>${user.name}</h3></div>
        <div>
        <img style="width:30%" class="thumbnail" src='${user.avatar_url}'
        </div>
        <div><a target ="_blank" class="btn btn-primary btn-block" href="${
          user.html_url
        }">view Profile</a></div>
    </div>
    <div>
    <div class="tag"> Puplic Repos ${user.public_repos}</div>
<div class="tag">Public Gists ${user.public_gists}</div>
<div class="tag">Followers ${user.followers}</div>
<div class="tag">Followings ${user.following}</div>
 </div>
      `);
      console.log(user.html_url);
    });
  });
});

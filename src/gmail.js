var CLIENT_ID = '178886639163-ubvtoc87o4mi1uohhlvtql9qbsgk1ai5.apps.googleusercontent.com';
var SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
function checkAuth() {
  gapi.auth.authorize(
    {
      'client_id': CLIENT_ID,
      'scope': SCOPES.join(' '),
      'immediate': true
    }, handleAuthResult)
}
function handleAuthResult(authResult) {
  var authorizeDiv = document.getElementById('authorize-div');
  if (authResult && !authResult.error) {
    authorizeDiv.style.display = 'none';
    loadGmailApi();
  } else {
    authorizeDiv.style.display = 'inline';
  }
};
function handleAuthClick(event) {
  gapi.auth.authorize(
    {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
    handleAuthResult)
  return false;
};
function loadGmailApi() {
  gapi.client.load('gmail', 'v1', listLabels);
};

function listLabels() {
  var request = gapi.client.gmail.users.labels.list({
    'userId': 'me'
  });
  request.execute(function(resp) {
    var labels = resp.labels;
    appendPre('Labels:');

    if (labels && labels.length > 0) {
      for (i = 0; i < labels.length; i++) {
        var label = labels[i];
        appendPre(label.name)
      }
    } else {
      appendPre('No Labels found.');
    }
  });
}
function appendPre(message) {
  var pre = document.getElementById('output');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

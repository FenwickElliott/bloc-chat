(function() {
  function BlocChatCookies($cookies, Message) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        currentUser = prompt("And you are...");
        Message.user = currentUser;
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies','Message', BlocChatCookies]);
})();

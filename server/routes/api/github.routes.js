module.exports = function(router, request, async, config) {

    router.get('/issues', function(req, res) {
        var issueData = [];
        var getData = function(pageCounter) {
            request({
                url: 'https://github.com/Manuee97/The-frog-game',
                headers: { 'user-agent': 'git-technetium' },
                json: true
            }, function(error, response, body) {
                if(!error && response.statusCode === 200) {
                    for(var issueIndex = 0; issueIndex < body.length; issueIndex++) {
                        if(!body[issueIndex].pull_request) {
                            issueData.push({
                                number: body[issueIndex].number,
                                title: body[issueIndex].title,
                                state: body[issueIndex].state,
                                creator: body[issueIndex].user.login,
                                assignee: body[issueIndex].assignee ? body[issueIndex].assignee.login : ''
                            });
                        }
                    }

                    if(body.length < 30) {
                        res.send(issueData);
                    } else {
                        getData(pageCounter + 1);
                    }
                }
            });
        };
        getData(1);
    });
};
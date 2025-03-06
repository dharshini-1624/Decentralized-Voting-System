App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',
  hasVoted: false,

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // TODO: refactor conditional
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },

  initContract: function() {
    $.getJSON("Election.json", function(election) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.Election = TruffleContract(election);
      // Connect provider to interact with contract
      App.contracts.Election.setProvider(App.web3Provider);

      return App.render();
    });
  },


  render: function() {
    console.log("intro to render.");
    var electionInstance;
    var loader = $("#loader");
    var content = $(".selectin-items");

    loader.show();
    content.hide();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });

    // Load contract data
    App.contracts.Election.deployed().then(function(instance) {
      electionInstance = instance;
      return electionInstance.candidatesCount();
    }).then(function(candidatesCount) {
      var candidatesNames = $("#candidatesNames");
      candidatesNames.empty();

      var candidatesSelect = $('#candidatesSelect');
      candidatesSelect.empty();
      for (var i = 1; i <= candidatesCount; i++) {
        electionInstance.candidates(i).then(function(candidate) {
          var id = candidate[0];
          var name = candidate[1];
          var voteCount = candidate[2];

          // Render candidate Result
          var candidateTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + voteCount + "</td></tr>"
          candidatesNames.append(candidateTemplate);

          // Render candidate ballot option
          var candidateOption = "<option value='" + id + "' >" + name + "</ option>"
          candidatesSelect.append(candidateOption);
        });
      }
      electionInstance.voters(App.account).then(function(hasvoted) {
          if(hasvoted)
          {
            $('.chairman-vote-form').hide();
            $('.chairman-voted').show();
          }
          $("#loader").hide();
          $(".selectin-items").show();
      });
      return electionInstance.wm1CandidatesCount();
    })
    .then(function(wm1CandidatesCount) {
      var wm1CandidatesNames = $("#wm1CandidatesNames");
      wm1CandidatesNames.empty();

      var wm1CandidatesSelect = $('#wm1CandidatesSelect');
      wm1CandidatesSelect.empty();
      for (var i = 1; i <= wm1CandidatesCount; i++) {
        electionInstance.wm1Candidates(i).then(function(wm1Candidate) {
          var id = wm1Candidate[0];
          var name = wm1Candidate[1];
          var voteCount = wm1Candidate[2];

          // Render candidate Result
          var candidateTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + voteCount + "</td></tr>"
          wm1CandidatesNames.append(candidateTemplate);

          // Render candidate ballot option
          var candidateOption = "<option value='" + id + "' >" + name + "</ option>"
          wm1CandidatesSelect.append(candidateOption);
        });
      }
      electionInstance.wm1Voters(App.account).then(function(hasvoted) {
          if(hasvoted)
          {
            $('.wm1-vote-form').hide();
            $('.wm1-voted').show();
          }
          $("#loader").hide();
          $(".selectin-items").show();
      });
      return electionInstance.wm2CandidatesCount();
    })
    //for wm2Candidate
    .then(function(wm2CandidatesCount) {
      var wm2CandidatesNames = $("#wm2CandidatesNames");

      wm2CandidatesNames.empty();

      var wm2CandidatesSelect = $('#wm2CandidatesSelect');
      wm2CandidatesSelect.empty();
      for (var i = 1; i <= wm2CandidatesCount; i++) {
        electionInstance.wm2Candidates(i).then(function(wm2Candidate) {
          var id = wm2Candidate[0];
          var name = wm2Candidate[1];
          var voteCount = wm2Candidate[2];

          // Render candidate Result
          var candidateTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + voteCount + "</td></tr>"
          wm2CandidatesNames.append(candidateTemplate);

          // Render candidate ballot option
          var candidateOption = "<option value='" + id + "' >" + name + "</ option>"
          wm2CandidatesSelect.append(candidateOption);
        });
      }
      electionInstance.wm2Voters(App.account).then(function(hasvoted) {
          if(hasvoted)
          {
            $('.wm2-vote-form').hide();
            $('.wm2-voted').show();
          }
          $("#loader").hide();
          $(".selectin-items").show();
      });
      return electionInstance.wm3CandidatesCount();
    })

    //for wm3Candidate
    .then(function(wm3CandidatesCount) {
      var wm3CandidatesNames = $("#wm3CandidatesNames");

      wm3CandidatesNames.empty();

      var wm3CandidatesSelect = $('#wm3CandidatesSelect');
      wm3CandidatesSelect.empty();
      for (var i = 1; i <= wm3CandidatesCount; i++) {
        electionInstance.wm3Candidates(i).then(function(wm3Candidate) {
          var id = wm3Candidate[0];
          var name = wm3Candidate[1];
          var voteCount = wm3Candidate[2];

          // Render candidate Result
          var candidateTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + voteCount + "</td></tr>"
          wm3CandidatesNames.append(candidateTemplate);

          // Render candidate ballot option
          var candidateOption = "<option value='" + id + "' >" + name + "</ option>"
          wm3CandidatesSelect.append(candidateOption);
        });
      }
      electionInstance.wm3Voters(App.account).then(function(hasvoted) {
          if(hasvoted)
          {
            $('.wm3-vote-form').hide();
            $('.wm3-voted').show();
          }
          $("#loader").hide();
          $(".selectin-items").show();
      });
      return electionInstance.wm4CandidatesCount();
    })

    //for wm3Candidate
    .then(function(wm4CandidatesCount) {
      var wm4CandidatesNames = $("#wm4CandidatesNames");

      wm4CandidatesNames.empty();

      var wm4CandidatesSelect = $('#wm4CandidatesSelect');
      wm4CandidatesSelect.empty();
      for (var i = 1; i <= wm4CandidatesCount; i++) {
        electionInstance.wm4Candidates(i).then(function(wm4Candidate) {
          var id = wm4Candidate[0];
          var name = wm4Candidate[1];
          var voteCount = wm4Candidate[2];

          // Render candidate Result
          var candidateTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + voteCount + "</td></tr>"
          wm4CandidatesNames.append(candidateTemplate);

          // Render candidate ballot option
          var candidateOption = "<option value='" + id + "' >" + name + "</ option>"
          wm4CandidatesSelect.append(candidateOption);
        });
      }
      electionInstance.wm4Voters(App.account).then(function(hasvoted) {
          if(hasvoted)
          {
            $('.wm4-vote-form').hide();
            $('.wm4-voted').show();
          }
          $("#loader").hide();
          $(".selectin-items").show();
      });
    })
    
    console.log("end of render.");
  },

  castVote: function() {
    var candidateId = $('#candidatesSelect').val();
    App.contracts.Election.deployed().then(function(instance) {
      return instance.vote(candidateId, { from: App.account });
    }).then(function(result) {
      // Wait for votes to update
      $(".selectin-items").hide();
      $("#loader").show();
    }).catch(function(err) {
      console.error(err);
    });
  },

  wm1CastVote: function() {
    var candidateId = $('#wm1CandidatesSelect').val();
    App.contracts.Election.deployed().then(function(instance) {
      return instance.wm1Vote(candidateId, { from: App.account });
    }).then(function(result) {
      // Wait for votes to update
      $(".selectin-items").hide();
      $("#loader").show();
    }).catch(function(err) {
      console.error(err);
    });
  },

  wm2CastVote: function() {
    var candidateId = $('#wm2CandidatesSelect').val();
    App.contracts.Election.deployed().then(function(instance) {
      return instance.wm2Vote(candidateId, { from: App.account });
    }).then(function(result) {
      // Wait for votes to update
      $(".selectin-items").hide();
      $("#loader").show();
    }).catch(function(err) {
      console.error(err);
    });
  },

  wm3CastVote: function() {
    var candidateId = $('#wm3CandidatesSelect').val();
    App.contracts.Election.deployed().then(function(instance) {
      return instance.wm3Vote(candidateId, { from: App.account });
    }).then(function(result) {
      // Wait for votes to update
      $(".selectin-items").hide();
      $("#loader").show();
    }).catch(function(err) {
      console.error(err);
    });
  },

  wm4CastVote: function() {
    var candidateId = $('#wm4CandidatesSelect').val();
    App.contracts.Election.deployed().then(function(instance) {
      return instance.wm4Vote(candidateId, { from: App.account });
    }).then(function(result) {
      // Wait for votes to update
      $(".selectin-items").hide();
      $("#loader").show();
    }).catch(function(err) {
      console.error(err);
    });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});

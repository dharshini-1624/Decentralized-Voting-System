// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract Election {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    
    mapping(address => bool) public voters;
    mapping(address => bool) public wm1Voters;
    mapping(address => bool) public wm2Voters;
    mapping(address => bool) public wm3Voters;
    mapping(address => bool) public wm4Voters;
    
    mapping(uint => Candidate) public candidates;
    mapping(uint => Candidate) public wm1Candidates;
    mapping(uint => Candidate) public wm2Candidates;
    mapping(uint => Candidate) public wm3Candidates;
    mapping(uint => Candidate) public wm4Candidates;
    
    // Store Candidates Count
    uint public candidatesCount;
    uint public wm1CandidatesCount;
    uint public wm2CandidatesCount;
    uint public wm3CandidatesCount;
    uint public wm4CandidatesCount;

    constructor() {
        //Chairman Candidate
        addCandidate("Chairman Candidate 1");
        addCandidate("Chairman Candidate 2");
        addCandidate("Chairman Candidate 3");

        //Word no 1 Member Candidate
        wm1AddCandidate("Word-1 Member Candidate 1");
        wm1AddCandidate("Word-1 Member Candidate 2");
        wm1AddCandidate("Word-1 Member Candidate 3");
        wm1AddCandidate("Word-1 Member Candidate 4");
        wm1AddCandidate("Word-1 Member Candidate 5");

        //Word no 2 Member Candidate
        wm2AddCandidate("Word-2 Member Candidate 1");
        wm2AddCandidate("Word-2 Member Candidate 2");
        wm2AddCandidate("Word-2 Member Candidate 3");
        wm2AddCandidate("Word-2 Member Candidate 4");
        wm2AddCandidate("Word-2 Member Candidate 5");

        //Word no 3 Member Candidate
        wm3AddCandidate("Word-3 Member Candidate 1");
        wm3AddCandidate("Word-3 Member Candidate 2");
        wm3AddCandidate("Word-3 Member Candidate 3");
        wm3AddCandidate("Word-3 Member Candidate 4");

        //Word no 4 Member Candidate
        wm4AddCandidate("Word-4 Member Candidate 1");
        wm4AddCandidate("Word-4 Member Candidate 2");
    }

    function addCandidate (string memory _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function wm1AddCandidate (string memory _name) private {
        wm1CandidatesCount ++;
        wm1Candidates[wm1CandidatesCount] = Candidate(wm1CandidatesCount, _name, 0);
    }

    function wm2AddCandidate (string memory _name) private {
        wm2CandidatesCount ++;
        wm2Candidates[wm2CandidatesCount] = Candidate(wm2CandidatesCount, _name, 0);
    }

    function wm3AddCandidate (string memory _name) private {
        wm3CandidatesCount ++;
        wm3Candidates[wm3CandidatesCount] = Candidate(wm3CandidatesCount, _name, 0);
    }

    function wm4AddCandidate (string memory _name) private {
        wm4CandidatesCount ++;
        wm4Candidates[wm4CandidatesCount] = Candidate(wm4CandidatesCount, _name, 0);
    }

    function vote (uint _candidateId) public {
        // require that they haven't voted before
        require(!voters[msg.sender]);

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount);

        // record that voter has voted
        voters[msg.sender] = true;

        // update candidate vote Count
        candidates[_candidateId].voteCount++;
        
        // trigger voted event
        //emit votedEvent(_candidateId);
    }

     function wm1Vote (uint _candidateId) public {
        // require that they haven't voted before
        require(!wm1Voters[msg.sender]);

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= wm1CandidatesCount);

        // record that voter has voted
        wm1Voters[msg.sender] = true;

        // update candidate vote Count
        wm1Candidates[_candidateId].voteCount++;
        
        // trigger voted event
        //emit votedEvent(_candidateId);
    }

    function wm2Vote (uint _candidateId) public {
        // require that they haven't voted before
        require(!wm2Voters[msg.sender]);

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= wm2CandidatesCount);

        // record that voter has voted
        wm2Voters[msg.sender] = true;

        // update candidate vote Count
        wm2Candidates[_candidateId].voteCount++;
        
        // trigger voted event
        //emit votedEvent(_candidateId);
    }

    function wm3Vote (uint _candidateId) public {
        // require that they haven't voted before
        require(!wm3Voters[msg.sender]);

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= wm3CandidatesCount);

        // record that voter has voted
        wm3Voters[msg.sender] = true;

        // update candidate vote Count
        wm3Candidates[_candidateId].voteCount++;
        
        // trigger voted event
        //emit votedEvent(_candidateId);
    }

    function wm4Vote (uint _candidateId) public {
        // require that they haven't voted before
        require(!wm4Voters[msg.sender]);

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= wm4CandidatesCount);

        // record that voter has voted
        wm4Voters[msg.sender] = true;

        // update candidate vote Count
        wm4Candidates[_candidateId].voteCount++;
        
        // trigger voted event
        //emit votedEvent(_candidateId);
    }
}

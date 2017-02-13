'use strict';

function CampaignViewModel() {

    let self = this;
    self.campaigns = ko.observableArray([]);

}

$(document).ready(function () {

    ko.applyBindings(new CampaignViewModel());

});
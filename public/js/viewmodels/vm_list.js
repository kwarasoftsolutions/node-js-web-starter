'use strict';

function MailingListViewModel() {

    let self = this;
    self.mailinglists = ko.observableArray([]);

}

$(document).ready(function () {

    ko.applyBindings(new MailingListViewModel());

});

/// <reference path="../knockout-min.js" />
'use strict';


let locations = [
    {
        name: "Alabama",
        abbreviation: "AL"
    },
    {
        name: "Alaska",
        abbreviation: "AK"
    },
    {
        name: "American Samoa",
        abbreviation: "AS"
    },
    {
        name: "Arizona",
        abbreviation: "AZ"
    },
    {
        name: "Arkansas",
        abbreviation: "AR"
    },
    {
        name: "California",
        abbreviation: "CA"
    },
    {
        name: "Colorado",
        abbreviation: "CO"
    },
    {
        name: "Connecticut",
        abbreviation: "CT"
    },
    {
        name: "Delaware",
        abbreviation: "DE"
    },
    {
        name: "District Of Columbia",
        abbreviation: "DC"
    },
    {
        name: "Federated States Of Micronesia",
        abbreviation: "FM"
    },
    {
        name: "Florida",
        abbreviation: "FL"
    },
    {
        name: "Georgia",
        abbreviation: "GA"
    },
    {
        name: "Guam",
        abbreviation: "GU"
    },
    {
        name: "Hawaii",
        abbreviation: "HI"
    },
    {
        name: "Idaho",
        abbreviation: "ID"
    },
    {
        name: "Illinois",
        abbreviation: "IL"
    },
    {
        name: "Indiana",
        abbreviation: "IN"
    },
    {
        name: "Iowa",
        abbreviation: "IA"
    },
    {
        name: "Kansas",
        abbreviation: "KS"
    },
    {
        name: "Kentucky",
        abbreviation: "KY"
    },
    {
        name: "Louisiana",
        abbreviation: "LA"
    },
    {
        name: "Maine",
        abbreviation: "ME"
    },
    {
        name: "Marshall Islands",
        abbreviation: "MH"
    },
    {
        name: "Maryland",
        abbreviation: "MD"
    },
    {
        name: "Massachusetts",
        abbreviation: "MA"
    },
    {
        name: "Michigan",
        abbreviation: "MI"
    },
    {
        name: "Minnesota",
        abbreviation: "MN"
    },
    {
        name: "Mississippi",
        abbreviation: "MS"
    },
    {
        name: "Missouri",
        abbreviation: "MO"
    },
    {
        name: "Montana",
        abbreviation: "MT"
    },
    {
        name: "Nebraska",
        abbreviation: "NE"
    },
    {
        name: "Nevada",
        abbreviation: "NV"
    },
    {
        name: "New Hampshire",
        abbreviation: "NH"
    },
    {
        name: "New Jersey",
        abbreviation: "NJ"
    },
    {
        name: "New Mexico",
        abbreviation: "NM"
    },
    {
        name: "New York",
        abbreviation: "NY"
    },
    {
        name: "North Carolina",
        abbreviation: "NC"
    },
    {
        name: "North Dakota",
        abbreviation: "ND"
    },
    {
        name: "Northern Mariana Islands",
        abbreviation: "MP"
    },
    {
        name: "Ohio",
        abbreviation: "OH"
    },
    {
        name: "Oklahoma",
        abbreviation: "OK"
    },
    {
        name: "Oregon",
        abbreviation: "OR"
    },
    {
        name: "Palau",
        abbreviation: "PW"
    },
    {
        name: "Pennsylvania",
        abbreviation: "PA"
    },
    {
        name: "Puerto Rico",
        abbreviation: "PR"
    },
    {
        name: "Rhode Island",
        abbreviation: "RI"
    },
    {
        name: "South Carolina",
        abbreviation: "SC"
    },
    {
        name: "South Dakota",
        abbreviation: "SD"
    },
    {
        name: "Tennessee",
        abbreviation: "TN"
    },
    {
        name: "Texas",
        abbreviation: "TX"
    },
    {
        name: "Utah",
        abbreviation: "UT"
    },
    {
        name: "Vermont",
        abbreviation: "VT"
    },
    {
        name: "Virgin Islands",
        abbreviation: "VI"
    },
    {
        name: "Virginia",
        abbreviation: "VA"
    },
    {
        name: "Washington",
        abbreviation: "WA"
    },
    {
        name: "West Virginia",
        abbreviation: "WV"
    },
    {
        name: "Wisconsin",
        abbreviation: "WI"
    },
    {
        name: "Wyoming",
        abbreviation: "WY"
    }
];

function SearchViewModel() {

    let self = this;

    var specialtyurl = '/api/v1/search/lists/specialties';
    var doctorspecialtyurl = '/api/v1/search/doctors/specialty/';
    var doctornameurl = '/api/v1/search/doctors/name/';

    self.specialties = ko.observableArray();
    self.searchLocations = ko.observableArray(locations);
    self.searchResults = ko.observableArray();

    self.searchType = ko.observable();
    self.searchTerm = ko.observable();
    self.searchLocation = ko.observable();


    self.error = ko.observable();

    self.searchLocation.subscribe(function (newValue) {
        if (newValue != "")
        {
            $('#location-modal').modal('hide');
            console.log('user selected ' + self.searchLocation().abbreviation);
        }
    })

    self.selectedOption = ko.observable();






    $.when($.getJSON(specialtyurl)).done(function (specialties) {
        //console.log(specialties);
        self.specialties(specialties.data);
    }).fail(function (error) {
        console.log(error);
        });


    self.setSearchType = function (searchType) {
        self.searchType(searchType);
        console.log(self.searchType());
        let suggestions = [];
        let placeholder = 'Find A Doctor'
        if (self.searchType() == "doctortype")
        {
            _.each(self.specialties(), function (data) {
                suggestions.push(data.name)
            });
            placeholder = "Search for a Doctor based on Specialties";
            setUpTypeAhead(searchType, self.specialties());
        }


        if (self.searchType() == "doctorname")
        {
            placeholder = "Search for a Doctor by Name";
            $('.typeahead').typeahead('destroy');
        }

        $('#search-term').attr("placeholder", placeholder);
    }

   

    self.doSearch = function () {

        self.searchTerm($('#search-term').val());

       
        console.log(self.searchType(), self.searchTerm(), self.searchLocation());
        if (self.searchType() != undefined && self.searchTerm() != "" && self.searchLocation() != undefined)
        {
            let location = self.searchLocation().abbreviation;
            let term = self.searchTerm();
            let searchurl = '';

            if (self.searchType() == 'doctortype')
            {
                var id = _.findWhere(self.specialties(), { name: term }).uid;
                //console.log('getting data', id);

                searchurl = doctorspecialtyurl + id + '/' + location;
            } else if (self.searchType() == 'doctorname')
            {
                searchurl = doctornameurl + term + '/' + location;
            }
           

            $.getJSON(searchurl, function (resp) {
                let docs = []
                _.each(resp.data, function (i) {

                    var specialty;
                    if (i.specialties)
                    {
                        specialty = i.specialties[0].name;
                    }

                    docs.push({
                        name: i.profile.first_name + ' ' + i.profile.last_name,
                        specialty: specialty,
                        email: 'email@email.com'
                    });
                })

                self.searchResults(docs);
                console.log(docs);

            }).fail(function (error) {
                self.error(error);
                });
            
        }
        else
        {
            let error = '';

            if (self.searchType() == undefined)
            {
                error +='Please select a search type<br />';
            }

            if (self.searchTerm() == "")
            {
                error +='Please input a search term<br />';
            }

            if (self.searchLocation() == undefined)
            {
                error+='Please input a search location<br />';
            }

            self.error(error);
        }
    }




}


function setUpTypeAhead(category, datasource) {
    $('.typeahead').typeahead('destroy');
    $('.typeahead').typeahead({ source: datasource });
}


//events 

$(document).ready( function () {

    ko.applyBindings(new SearchViewModel());

});
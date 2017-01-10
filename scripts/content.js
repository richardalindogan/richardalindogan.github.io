(function(){
    var app = angular.module('myApp', []);
    app.controller('descriptCtrl', function($scope){
        $scope.description=[
            {words:"Prospective UX designer, learning web developer, and digital art hobbyist taking on the world one design at a time."},
            {words:"Coming from a Software Engineering background, I am no stranger to team collaboration, practical design, and new technologies. "},
            {words:"With a lifelong passion for illustration, I am versed in the importance of aethetics, form ,and creativity."},
            {words:"These two sides provides a broader perspective, and a skillset that can bring together the best of worlds in design."},
        ]
    });
    app.controller('facetCtrl', function($scope){
        $scope.facets=[
            {facet:'Design & Draw',description:'Test1',
             images:['svg_assets/Axure.png','svg_assets/photoshop.svg','svg_assets/inkscape.svg']},
            {facet:'Develop',description:'Test2',images:['svg_assets/bracket.svg','svg_assets/github.svg']}
        ]
    });
    app.controller('myCtrl',function($scope){
        $scope.images=[
            {image:'svg_assets/gmail.svg', contact: 'richardalindogan@gmail.com'}
        ];
    });
    app.controller('myCtrl2', function($scope){
        $scope.accounts=[
            {icon:'svg_assets/linkedin.png',account:'Linkedin',link:'https://www.linkedin.com/in/ralindogan'},
            {icon:'svg_assets/github_button.svg',account:'Github',link:'https://github.com/richardalindogan'},
            {icon:'svg_assets/tumblr.png',account:'Tumblr',link:'http://richdogan.tumblr.com/'}
        ];
    })
})();
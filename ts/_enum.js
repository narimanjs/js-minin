"use strict";
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
const membership = Membership.Standard;
const membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["FB"] = "FB";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
    SocialMedia["TWITTER"] = "TWITTER";
})(SocialMedia || (SocialMedia = {}));
const social = SocialMedia.INSTAGRAM;
console.log(social);

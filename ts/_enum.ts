enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard
const membershipReverse = Membership[2]
console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
    FB = 'FB',
    INSTAGRAM = 'INSTAGRAM',
    TWITTER = 'TWITTER'
}

const social = SocialMedia.INSTAGRAM
console.log(social);

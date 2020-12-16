// @ts-ignore
import {Profile} from '../models/Profile'

async function getProfileInfo(): Promise<Profile> {
    const fullName = document.querySelectorAll(".pv-top-card--list li")[0];
    const title = document.querySelectorAll(".pv-top-card h2.mt1")[0];
    const country = document.querySelectorAll(".pv-top-card--list-bullet li")[0];
    const img = document.querySelectorAll(".pv-top-card__image img")[0];

    return {
        fullName: fullName.textContent ? fullName.textContent.replace(/\n/, "").trim() : null,
        title: title.textContent ? title.textContent.replace(/\n/, "").trim() : null,
        country: country.textContent ? country.textContent.replace(/\n/, "").trim() : null,
        imageUrl: img.getAttribute('url')
    };
}

let profile: Profile | null = null;
setTimeout(() => {
    getProfileInfo().then(result => {
        profile = result || profile
    })
}, 5000);

chrome.runtime.onMessage.addListener(async (msg, sender, response) => {
    if (msg.from === "popup" && msg.subject === "getFullName") {
        console.log(profile);
        response(profile)
    } else {
        response("not hello");
    }
    return true
});

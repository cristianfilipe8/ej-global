ej.addCulture( "sa-IN", {
	name: "sa-IN",
	englishName: "Sanskrit (India)",
	nativeName: "संस्कृत (भारतम्)",
	language: "sa",
	numberFormat: {
		groupSizes: [3,2],
		percent: {
			groupSizes: [3,2]
		},
		currency: {
			pattern: ["$ -n","$ n"],
			groupSizes: [3,2],
			symbol: "₹"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			days: {
				names: ["रविवासरः","सोमवासरः","मङ्गलवासरः","बुधवासरः","गुरुवासरः","शुक्रवासरः","शनिवासरः"],
				namesAbbr: ["रवि","सोम","मङ्ग","बुध","गुरु","शुक्र","शनि"],
				namesShort: ["र","सो","म","बु","गु","शु","श"]
			},
			months: {
				names: ["जान्युअरी","फेब्रुअरी","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोव्हेंबर","डिसेंबर",""],
				namesAbbr: ["जान्युअरी","फेब्रुअरी","मार्च","एप्रिल","मे","जुन","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोव्हेंबर","डिसेंबर",""]
			},
			AM: ["मध्यानपूर्व","मध्यानपूर्व","मध्यानपूर्व"],
			PM: ["मध्यानपच्यात","मध्यानपच्यात","मध्यानपच्यात"],
			patterns: {
				d: "dd-MM-yyyy",
				D: "dd MMMM yyyy dddd",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dd MMMM yyyy dddd HH:mm",
				F: "dd MMMM yyyy dddd HH:mm:ss",
				M: "dd MMMM",
				Y: "MMMM, yyyy"
			}
		}
	}
});

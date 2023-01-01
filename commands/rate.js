// const { Message, Client } = require("discord.js");

// module.exports = {
//     name: "rate",
//     /**
//      *
//      * @param {Client} client
//      * @param {Message} message
//      * @param {String[]} args
//      */
//     run: async (client, message, args, prefix) => {
//         //Global parameters
//       const ocrSpace = require('ocr-space-api-wrapper')
//       const {
//         apikey
//       } = '';
//       var statname = ["HP+", "ATK+", "DEF+", "te+", "DMG+", "ge+", "ry+"]
//       var elementname = ["Anemo", "Cryo", "Geo", "Pyro", "Hydro", "Electro", "Dendro"]
//       var mainname = ["HP", "ATK", "DEF", "Rate", "DMG", "arge", "tery", "nus"]
//       var selection = []
//       var maxpossible = ''
//       var mastermessage = '5 star artifact detected:\n'
//       var matchmessage = "Artifact works:\n"
//       var set = ''
//       var setpiece = args[0]
//       var indisc = args[1]
//       var mainskip = false
//       var element = ''
//       var mainstat = ''
//       var mainvalue = ''
//       var substatlist = []
//       var options = {}
//       var strength = 0
//       var counter = 0
//       var counterstore = []
//       var rating = 0
//       var swapto4 = [0,0]
  
//       //Calcualtion parameter
//       var sum = 0
//       var roll = [0, 0]
//       var range = [0.50, 0.49, 0.050, 0.049] //First 2 float are for substats that show no periods, second 2 floats are for substats that show 1 number after a period.
//       var outcome = []
//       var rounding = 0
//       var found = false
  
//       //Library of substats and sets. % was moved to the stat name rather than the number.
//       var {
//         substat,
//         substat4,
//       } = require('../database/substats.json');
//       const {
//         setstat,
//       } = require('../database/setstats.json');
//       const characters = require('../database/characters.json');
  
//       //Preemptive check
//       switch (setpiece) {
//         case "flower":
//           setpiece = -2
//           break;
//         case "plume":
//           setpiece = -1
//           break;
//         case "sands":
//           setpiece = 0
//           break;
//         case "goblet":
//           setpiece = 1
//           break;
//         case "circlet":
//           setpiece = 2
//           break;
//       }
  
//       if (!(Number.isInteger(setpiece) && setpiece < 3 && setpiece > -3) && setpiece != undefined) {
//         message.channel.send("For the extended OCR, please provide what type of piece it is in lowcaps (f.e. flower).")
//         return;
//       }
  
//       //Functions
//       //Function: Calculate combinations. Will go through every possible combination of 4 numbers and i amount of rolls. Using itself is allowed.
//       function combination(stats, roll, index) {
//         var combo = [];
//         var recursiveABC = function (singleSolution) {
  
//           if (singleSolution.length > roll[index] - 1) {
//             combo.push(singleSolution);
//             return;
//           }
//           for (let i = 0; i < stats.length; i++) {
//             recursiveABC(singleSolution.concat([stats[i]]));
//           }
//         };
//         recursiveABC([]);
//         return combo;
//       };
  
//       //Function: Reconstruction of the analysed value. Will call the combination() function.
//       function analysis(args) {
//         swapto4[1]++
//         //Determine rolls
//         var entry = Object.keys(substat).find(p => p == args[0]); //args[0] is the name of the substat (in focus) and args[1] is its numerical value
//         if (entry != undefined) {
//           var stats = substat[entry]
  
//           //Check if displayed stat has period or not, adjust range
//           if (args[0] == "HP" || args[0] == "ATK" || args[0] == "DEF" || args[0] == "EM") {
//             range = [range[0], range[1]]
//             rounding = 0
//           } else {
//             range = [range[2], range[3]]
//             rounding = 1
//           }
  
//           //Calculate maximum possible rolls from args[1] and consider rolls - i as a possibility.
//           args[1] = parseFloat(args[1])
  
//           for (let i = 1; sum + stats[0] < args[1] + range[1] && i < 7; i++) {
//             sum += stats[0]
//             roll = [i - 1, i]
//           }
  
//           if (roll[0] == 0) { //In case only 1 roll is considered, have rolls - 1 be locked at 1 rather than 0
//             roll[0] = 1
//           }
  
//           //Store values for both possible rolls and remove out of bounds + duplicates after rounding
//           outcome = [combination(stats, roll, 0), combination(stats, roll, 1)]
//           for (let i = 0; i < outcome.length; i++) {
//             for (let j = 0; j < outcome[i].length; j++) {
//               outcome[i][j] = outcome[i][j].reduce((pv, cv) => pv + cv, 0)
//               if ((outcome[i][j] > args[1] + range[1]) || (outcome[i][j] < args[1] - range[0])) { //Check if the combination in focus is within the possible range of the substat
//                 outcome[i][j] = 0 //If not, set value to 0 for filtering
//               }
//             }
//             outcome[i] = outcome[i].filter(val => val != 0) //Filter the values set to 0
  
//             let x = 0
//             while (x < outcome[i].length) {
//               outcome[i][x] = parseFloat(outcome[i][x].toFixed(rounding)); //Perform the rounding. Used "while" to spice things up.
//               x++
//             }
  
//             var uniqueoutcome = [];
//             uniqueoutcome[i] = []
//             outcome[i].forEach((c) => { //Check for unique outcomes (mutliple combos with the same value are redundant, remove those.)
//               if (!uniqueoutcome[i].includes(c)) {
//                 uniqueoutcome[i].push(c);
//               }
//             });
//             substatlist.push(args[0]) //Sum up the substats so they can be tested for the usefulness determintation
  
//             if (uniqueoutcome[i].includes(args[1])) { //Ideally youd only have 1 value left. Check if the value corresponds to the displayed value read by the OCR.
//               maxpossible = parseFloat((substat[entry][3] * roll[i]).toFixed(rounding));
//               counterstore[counter] = [args[0], roll[i]]
//               counter++
//               mastermessage += "The substat **" + args[0] + " (" + args[1] + (args[0].includes("%") && "%" || "") + ")** has **" + roll[i] + "** rolls in total! Max possible stat is **" + maxpossible + (args[0].includes("%") && "%" || "") + "** (" + Math.round(((args[1] - roll[i] * substat[entry][0].toFixed(rounding)) / (maxpossible - roll[i] * substat[entry][0].toFixed(rounding))) * 100) + "%).\n"
//               found = true //Mark it. In case it would not have been found, it would mark it as unconstructable.
//               return;
//             }
//           }
  
//           if (found == false) {
//             counterstore[counter] = [args[0], 1]
//             counter++
//             swapto4[0]++
//             mastermessage += "The substat **" + args[0] + "** with the value **" + args[1] + (args[0].includes("%") && "%" || "") + "** is impossible to construct or OCR failed to recognise the characters!\n"
//           }
//           found = false //Reset value for next iteration
//         } else {
//           message.channel.send("Stat not found!")
//           return;
//         }
//       }
  
//       //Function: The actual OCR and analysis of the picture. Will call the analysis() function.
//       try {
//         message.attachments.forEach(attachment => {
//           const url = attachment.url;
//           async function main() {
//             message.channel.send("OCR request sent!").then(msg => {
//               setTimeout(() => msg.delete(), 5000)
//             })
//             try {
//               // Apply OCR by external API
//               const res1 = await ocrSpace(url, {
//                 apiKey: apikey,
//                 isTable: true, //Makes sure this is more similar to a table than actual text.
//                 OCREngine: 2 //Makes sure this is about general character detection rather than analysing a text.
//               })
//               var analysedtext = res1.ParsedResults[0].ParsedText
//             } catch (error) {
//               console.log(error)
//             }
//             message.channel.send("OCR request fulfilled!").then(msg => {
//               setTimeout(() => msg.delete(), 5000)
//             })
  
//             analysedtext = analysedtext.split("\n") //Split the lines of the raw OCR output into array elements
  
//             for (let each = 0; each < analysedtext.length; each++) {
//               analysedtext[each] = analysedtext[each].replace(/\t/g, '') //prune useless information
//               analysedtext[each] = analysedtext[each].replace(/\r/g, '') //prune useless information
//               analysedtext[each] = analysedtext[each].replace(/\n/g, '') //prune useless information
//               if (args[0]) {
//                 //Determine element if necessary (goblet)
//                 for (every in elementname) {
//                   if (analysedtext[each].includes(elementname[every]) && mainskip == false) {
//                     element = elementname[every]
//                     analysedtext[each] = elementname[every]
//                     mainskip = true
//                   }
//                 }
//                 //Determine main stat and value
//                 for (every in mainname) {
//                   if (analysedtext[each].includes(mainname[every]) && !analysedtext[each].includes("+")) {
//                     mainstat = mainname[every]
//                     switch (mainstat) { //Use as little information as necessary to prevent OCR mistakes from breaking the analysis
//                       case "Rate":
//                         mainstat = "CR"
//                         break;
//                       case "DMG":
//                         mainstat = "CDMG"
//                         break;
//                       case "arge":
//                         mainstat = "ER"
//                         break;
//                       case "tery":
//                         mainstat = "EM"
//                         break;
//                       case "nus":
//                         mainstat = element + " DMG"
//                         break;
//                     }
//                     if(!analysedtext[each+1].includes("+")){
//                       mainvalue = analysedtext[each+1]
//                     } else {
//                     analysedtext[each] = analysedtext[each].replace(mainname[every], '')
//                     mainvalue = analysedtext[each]
//                     }
//                     if (mainvalue.includes("%")) { //Determine if the mainstat is relative or absolute
//                       mainstat += "%"
//                     }
//                   } else if (setpiece == -1 && mainstat == '') {
//                     mainstat = "ATK"
//                   } else if (setpiece == -2 && mainstat == '') {
//                     mainstat = "HP"
//                   }
//                 }
//                 //Determine the set
//                 for (every in setstat) {
//                   if (analysedtext[each].includes(setstat[every])) {
//                     analysedtext[each] = analysedtext[each].split(':')[0]
//                     set = analysedtext[each]
//                   }
//                 }
//               }
//               //Determine all substats
//               for (every in statname) {
//                 if (analysedtext[each].includes(statname[every])) {
//                   switch (statname[every]) { //Detect the type of substat. "+" is a really good indicator as to where the substat is.
//                     case "HP+":
//                       analysedtext[each] = analysedtext[each].substring(analysedtext[each].lastIndexOf("+") + 1) //Move to the final instance of "+" and remove everything (including self) to the left of the string
//                       if (analysedtext[each].includes("%")) { //Check if ambiguous stats either are relative stats or flat stats
//                         analysedtext[each] = analysedtext[each].replace(/%/g, '') //prune now useless information
//                         selection.push(["HP%", analysedtext[each]]) //Add "%" to the name
//                       } else {
//                         selection.push(["HP", analysedtext[each]])
//                       }
//                       break;
  
//                     case "ATK+":
//                       analysedtext[each] = analysedtext[each].substring(analysedtext[each].lastIndexOf("+") + 1)
//                       if (analysedtext[each].includes("%")) {
//                         analysedtext[each] = analysedtext[each].replace(/%/g, '')
//                         selection.push(["ATK%", analysedtext[each]])
//                       } else {
//                         selection.push(["ATK", analysedtext[each]])
//                       }
//                       break;
  
//                     case "DEF+":
//                       analysedtext[each] = analysedtext[each].substring(analysedtext[each].lastIndexOf("+") + 1)
//                       if (analysedtext[each].includes("%")) {
//                         analysedtext[each] = analysedtext[each].replace(/%/g, '')
//                         selection.push(["DEF%", analysedtext[each]])
//                       } else {
//                         selection.push(["DEF", analysedtext[each]])
//                       }
//                       break;
  
//                     case "te+":
//                       analysedtext[each] = analysedtext[each].substring(analysedtext[each].lastIndexOf("+") + 1)
//                       analysedtext[each] = analysedtext[each].replace(/%/g, '')
//                       selection.push(["CR%", analysedtext[each]])
//                       break;
  
//                     case "DMG+":
//                       analysedtext[each] = analysedtext[each].substring(analysedtext[each].lastIndexOf("+") + 1)
//                       analysedtext[each] = analysedtext[each].replace(/%/g, '')
//                       selection.push(["CDMG%", analysedtext[each]])
//                       break;
  
//                     case "ge+":
//                       analysedtext[each] = analysedtext[each].substring(analysedtext[each].lastIndexOf("+") + 1)
//                       analysedtext[each] = analysedtext[each].replace(/%/g, '')
//                       selection.push(["ER%", analysedtext[each]])
//                       break;
  
//                     case "ry+":
//                       analysedtext[each] = analysedtext[each].substring(analysedtext[each].lastIndexOf("+") + 1)
//                       selection.push(["EM", analysedtext[each]])
//                       break;
//                   }
//                 }
//               }
//             }
//             //Checking if main stat is possible
//             switch(setpiece){
//               case -2:
//                 if(mainstat != "HP"){
//                   message.channel.send("Main stat was misread, missing or impossible!")
//                   return;
//                 }
//                 break;
//                 case -1:
//                 if(mainstat != "ATK"){
//                   message.channel.send("Main stat was misread, missing or impossible!")
//                   return;
//                 }
//                 break;
//                 case 0:
//                 if(mainstat != "ATK%" && mainstat != "DEF%" && mainstat != "HP%" && mainstat != "ER%" && mainstat != "EM"){
//                   message.channel.send("Main stat was misread, missing or impossible!")
//                   return;
//                 }
//                 break;
//                 case 1:
//                 if(mainstat != "ATK%" && mainstat != "DEF%" && mainstat != "HP%" && mainstat != "Cryo DMG%" && mainstat != "EM" && mainstat != "Anemo DMG%" && mainstat != "Dendro DMG%" && mainstat != "Electro DMG%" && mainstat != "Hydro DMG%" && mainstat != "Pyro DMG%" && mainstat != "Geo DMG%"){
//                   message.channel.send("Main stat was misread, missing or impossible!")
//                   return;
//                 }
//                 break;
//                 case 2:
//                 if(mainstat != "ATK%" && mainstat != "DEF%" && mainstat != "HP%" && mainstat != "CR%" && mainstat != "EM" && mainstat != "CDMG%"){
//                   message.channel.send("Main stat was misread, missing or impossible!")
//                   return;
//                 }
//                 break;
//             }
//             if (set == '' && indisc != "all") {
//               message.channel.send("Could not detect the set type! Make sure the set type is included in the image!")
//               return;
//             }
//             if (mainstat == '') {
//               message.channel.send("Could not detect the main stat! Make sure the main stat is included in the image!")
//               return;
//             }
//             if(swapto4[0] == 0 && swapto4[1] == 0){
//             for (let idx = 0; idx < selection.length; idx++) { //Reset all parameters for next iteration
//               sum = 0
//               roll = [0, 0]
//               range = [0.50, 0.49, 0.050, 0.049]
//               outcome = []
//               rounding = 0
//               found = false
//               analysis(selection[idx], set)
//             }
//           }
//             if(swapto4[0]/swapto4[1] >= 0.5){
//               for (let idx = 0; idx < selection.length; idx++) { //Reset all parameters for next iteration
//                 sum = 0
//                 roll = [0, 0]
//                 range = [0.50, 0.49, 0.050, 0.049]
//                 outcome = []
//                 rounding = 0
//                 found = false
//                 substat = substat4
//                 counterstore = []
//                 counter = 0
//                 mastermessage = '4 star artifact detected:\n'
//                 analysis(selection[idx], set)
//               }
//               swapto4 = [0,100]
//             }
  
//             if (args[0]) {
//               //Determine who this could belong to. This is a very big iteration.
//               for (each in characters) {
//                 for (every in characters[each]) {
//                   if (indisc != "all") {
//                     if (characters[each][every][2].includes(set)) {
//                       if (!options.hasOwnProperty(each)) {
//                         options[each] = {
//                           [every]: characters[each][every]
//                         }
//                       } else {
//                         Object.assign(options[each], {
//                           [every]: characters[each][every]
//                         })
//                       }
//                     }
//                   } else {
//                     options = characters
//                   }
//                 }
//               }
//               //Test object "options" created against the substats to see if it is viable. Separate loops for better visuals. This part is horrendous.
//               for (each in options) {
//                 for (every in options[each]) {
//                   if (options[each][every][1].includes(mainstat)) { //If the main stat exists as a substat, then splice that option
//                     let index = options[each][every][1].indexOf(mainstat);
//                     if (index > -1) {
//                       options[each][every][1].splice(index, 1);
//                     }
//                   } else if (options[each][every][1][3]) { //If the main stat does not exist as a substat, splice the fourth option if it exists
//                     options[each][every][1].splice(3, 1)
//                   }
//                 }
//               }
//               if (setpiece == 0 || setpiece == 1 || setpiece == 2) {
//                 for (each in options) {
//                   for (every in options[each]) {
//                     let intersection1 = options[each][every][0][setpiece].filter(x => mainstat.includes(x)) //Check for primary stat
//                     if (intersection1.length == 0) {
//                       delete options[each][every]
//                       if (Object.entries(options[each]) == 0) {
//                         delete options[each]
//                       }
//                     }
//                   }
//                 }
//               }
//               for (each in options) {
//                 for (every in options[each]) {
//                   let intersection2 = options[each][every][1].filter(x => substatlist.includes(x)) //Check for shared substats
//                   let difference = options[each][every][1].filter(x => !substatlist.includes(x)) //Check for missing substats
//                   strength = intersection2.length
//                   options[each][every].strength = strength
//                   if (options[each][every].strength == 0) {
//                     delete options[each][every]
//                     if (Object.entries(options[each]) == 0) {
//                       delete options[each]
//                     }
//                   } else {
//                     for (one in counterstore) {
//                       for (two in intersection2) {
//                         if (counterstore[one][0] == intersection2[two]) {
//                           rating += counterstore[one][1]
//                         }
//                       }
//                     }
//                     matchmessage += "(" + rating + "/" + (intersection2.length + difference.length + (swapto4[0]/swapto4[1] >= 0.5 ? 4 : 5)) + ") " + (options[each][every].strength == 1 ? "Acceptable" : (options[each][every].strength > 2 ? "Very well" : "Well")) + " on **" + each + "** (" + every + ") with the substats: **" + intersection2 + "**" + (difference && ("," + difference) || '') + ".\n"
//                     rating = 0
//                   }
//                 }
//               }
//             }
  
//             message.channel.send(mastermessage || "Unidentified image!") //If OCR fails at a detection level, it will send an error rather than an analysis
//             if (setpiece != undefined) {
//               if (matchmessage != "Artifact works:\n") {
//                 message.channel.send(matchmessage, { split: true })
//               } else {
//                 message.channel.send("Artifact is not used on any character for any build.")
//               }
//             }
  
//           }
//           main()
//         });
//       } catch (error) {
//         console.log(error)
//         message.channel.send("No attachment provided!")
//         return;
//       }
//     },
// };

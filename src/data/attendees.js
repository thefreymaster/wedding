import ATTENDEES from '../data/attendees.json';

// export const attendees = {
//     "KathyJimFreymiller": {
//         "isAttending": false,
//         "hasPlusOne": true,
//         "hasPlusOneAttending": false,
//     },
//     "CissieJoeButler": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "KatherineButlerMatthewBlasi": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "KevinButlerGues": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "HaleyFreymillerGuest": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "RichMarciaGracePrice": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "AshleyElmoDowd": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "CharlieWittGues": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "NickCorreaGues": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "AndrewCarmodyGues": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "AnthonyRomanoGues": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "CaitAndresPfahl": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "CassandraButchHarnish": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "JamesTerriLydenButler": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "JohnButler": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "AnnJoeAlexisKatrinaPotak": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "MargaretButler": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "ClairePotakGues": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "KylePotakGues": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "EricPotak": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "TommyDanaKieranJudge": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "KirstenJudgeBrianQuinn": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "TimLisaJudge": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "Jim,Barbra,KenRyanJudge": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "RobertaDonSchulein": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "BillJudgeGues": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "KimGormanStevenLeidner": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "AlexaBrianteBarryArmstrong": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "KatieGrazioseGues": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "KathrynJoshJillson": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "MikePaigeDombek": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "JustinOngHanRen": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "AylaPardoJoeTomlinson": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "CJGonzalez": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "KatrinaFishman": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "JoshJoleneMadewell": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "BaileyKyleWorley": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "KateGibbonsTylerTadej": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "HeatherForeytFilaEstrada": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "AlyssaConnollyAdamSmith": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "LizConradCodyAyers": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "LaurenRyanMcGee": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "KailenKoBryanJohnson": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "AJRamirezRyanO`Connor": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "JoeOrthoefer": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "AnthonyPopielGues": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "JeffDevinDiaz": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "ScottMaryAnnGorman": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "DougLeighCarmody": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "NickMallorySlauson": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "LarryMaryBing": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "EllenKevinMcElroy": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "CynthiaPalmerConnieMcCammon": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "MaryEllenBrianElliott": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "SaraStevenHogg": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "KimWitt": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "AlanLisaMera": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     },
//     "KarenJockMartin": {
//         "isAttending": false,
//         "hasPlusOne": false,
//         "hasPlusOneAttending": false,
//     }
// };

export const prettyAttendees = ATTENDEES;
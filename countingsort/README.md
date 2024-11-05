# Countingsort

- **Beskrivelse af Algorithme**     
CountingSort er en algorihtme der sortere ved at tælle nummeret af forekomster af hvert unik element i arrayet. Det gør den ved at have et hjælpearray og den sortere via at kortlægge optællingen som et indeks for hjælpearrayet 
https://en.wikipedia.org/wiki/Counting_sort

- **Psedukode**     
    ````js
    let max = maxNumberOf(list)
    let countingArr = Array(max + 1);
    let result = [];

    list.forEach(num => {
    countingArr[num++]
    })

    countingArr.forEach((num, index) => {
        for(let i = 0; i < item; i++){
            result.push(num)
        }
    })
    return result
    

- **Tidkompleksitet Big(O)**        
hvis man har n som nummeret af elementer i arrayet og hvis man har k som er forskellen mellem den største og mindste værdi i arrayet. Hvis man bryder det ned kan man sige at den første iteration tager O(1) fordi den er konstant og i step 2 vil foreach tage O(k) fordi at løkken bliver udført k antal gange step 3 vil foreach tage O(n) fordi løkken bliver udført n antal gange gange og det vil det gøre endtil at den er løst så derfor vil det være BigO(n + k).

 Det er værste tilfælde hvilket vil sige at hvis det største element er markant større end de andre elementer hvilket essentielt vil gøre det O(n^3) eller nogle skriver også O(k). 

 Det bedste tilfælde for den vil være at hvis alle elementer er i same range, altså hvis range er = 1 hvilket vil sige at det ville tage O(n)

- **Links og Videoer**      
https://www.interviewcake.com/concept/java/counting-sort
https://visualgo.net/en/sorting
https://www.programiz.com/dsa/counting-sort
https://www.geeksforgeeks.org/counting-sort/
https://www.youtube.com/watch?v=EItdcGhSLf4
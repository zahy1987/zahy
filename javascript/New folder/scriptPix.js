const pix = {
    cerneala: 10,
    scrie() {
        if (this.cerneala > 0) {
            this.cerneala -= 1;
            this.afiseazaCerneala();
        } else {
            console.log("Nu mai e cerneală!");
        }
    },
    scrieDeNOri(n) {
        for (let i = 0; i < n; i++) {
            if (this.cerneala > 0) {
                this.scrie();
            } else {
                break;
            }
        }
    },
    afiseazaCerneala() {
        let bara = "●".repeat(this.cerneala);
        let gol = "○".repeat(10 - this.cerneala);
        console.log(`Cerneala: [${bara}${gol}]`);
    }
}

// Test
pix.afiseazaCerneala(); // Pornim cu bara plină
pix.scrieDeNOri(12);     // Scriem de 12 ori

class User {
	#progress = 0;
	#maxRank = 8;
	#startRank = -8;
	#rank = this.#startRank;
	#ratio = 10;
	#pointsToNextLvl = 100;

	#incRank(count){
		for (let i = 0; i < count; i++) {
			if(this.#rank === 0) count++

			this.#rank++
		}
	}

	#isNoRating(activityRank){
		return this.rank - activityRank >= 2
	}

	incProgress(activityRank){
		if(this.#rank === this.#maxRank || this.#isNoRating(activityRank)) return;

		const curRankAbs = Math.abs(this.#rank);
		const activityRankAbs = Math.abs(activityRank);


		const differenceRank =  Math.max(curRankAbs, activityRankAbs) - Math.min(curRankAbs, activityRankAbs);
		this.#progress += this.#ratio * differenceRank * differenceRank;


		if(this.#progress >= this.#pointsToNextLvl){
			const howManyRanksUpgrade = Math.floor(this.#progress / this.#pointsToNextLvl);

			this.#progress -= this.#progress - howManyRanksUpgrade * this.#pointsToNextLvl
			this.#incRank(howManyRanksUpgrade)
		}
	}

	get rank() {
		return this.#rank
	}
	get progress(){
		return this.#progress
	}
}

const user = new User()
user.rank // => -8
user.progress // => 0
user.incProgress(-7)
user.incProgress(-5) // will add 90 progress
user.progress // progress is now zero
user.rank// rank was upgraded to -7
user.incProgress(8)
user.incProgress(8)
user.incProgress(8)
user.incProgress(8)
user.incProgress(8)

console.log(user.rank)
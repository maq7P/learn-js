class User {
	#progress = 0;
	#maxRank = 8;
	#startRank = -8;
	#rank = this.#startRank;
	#ratio = 10;
	#pointsToNextLvl = 100;

	#incRank(count){
		for (let i = 0; i < count; i++) {
			if(this.#rank === 8) return;
			if(this.#rank === 0) count++

			this.#rank++
		}
	}

	#isNoRating(activityRank){
		return this.#rank === this.#maxRank
				|| this.rank - activityRank >= 2
				|| activityRank > this.#maxRank
				|| activityRank < this.#startRank
	}

	incProgress(activityRank){
		if(this.#isNoRating(activityRank)) return;

		if(this.#rank === activityRank){
			this.#progress += 3
		}
		if(this.#rank > activityRank){
			this.#progress += 1
		}
		if(activityRank > this.#rank){
			const differenceRank =  this.#rank < 0
					&& activityRank > 0
						? Math.abs(this.#rank - activityRank) - 1
						: Math.abs(this.#rank - activityRank);

			this.#progress += this.#ratio * differenceRank * differenceRank;
		}


		if(this.#progress >= this.#pointsToNextLvl){
			const howManyRanksUpgrade = Math.floor(this.#progress / this.#pointsToNextLvl);

			this.#progress = this.#progress -
					(howManyRanksUpgrade > 0 ? howManyRanksUpgrade : 1) * this.#pointsToNextLvl

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
user.progress // => 10
user.incProgress(8) // will add 90 progress
user.progress // progress is now zero
console.log(user.rank) // rank was upgraded to -7
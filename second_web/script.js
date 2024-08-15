document.addEventListener('DOMContentLoaded', function() {
    const foodList = [
        {
            name: "닭가슴살",
            image: "https://example.com/chicken.jpg",  // 실제 이미지 URL로 대체하세요
            calories: 165,
            protein: 31,
            fat: 3.6,
            carbohydrates: 0,
            rating: 5,
            description: "닭가슴살은 고단백, 저지방 식품으로 다이어트에 적합합니다."
        },
        {
            name: "연어",
            image: "https://example.com/salmon.jpg",  // 실제 이미지 URL로 대체하세요
            calories: 208,
            protein: 20,
            fat: 13,
            carbohydrates: 0,
            rating: 4.5,
            description: "연어는 오메가-3 지방산이 풍부해 심장 건강에 좋습니다."
        },
        {
            name: "브로콜리",
            image: "https://example.com/broccoli.jpg",  // 실제 이미지 URL로 대체하세요
            calories: 55,
            protein: 3.7,
            fat: 0.6,
            carbohydrates: 11,
            rating: 4,
            description: "브로콜리는 비타민 C와 식이섬유가 풍부한 슈퍼푸드입니다."
        },
        // 추가 음식 데이터
    ];

    const foodListDiv = document.getElementById('food-list');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const spanClose = document.getElementsByClassName('close')[0];

    foodList.forEach(food => {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');

        // 별점 생성
        const stars = '★'.repeat(Math.floor(food.rating)) + '☆'.repeat(5 - Math.floor(food.rating));

        foodItem.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <div class="food-info">
                <div class="star-rating">${stars}</div>
            </div>
        `;

        foodItem.addEventListener('click', () => {
            openModal(food);
        });

        foodListDiv.appendChild(foodItem);
    });

    function openModal(food) {
        modalBody.innerHTML = `
            <h2>${food.name}</h2>
            <img src="${food.image}" alt="${food.name}" style="width: 100%; height: auto; margin-top: 10px;">
            <p style="margin-top: 10px;"><strong>칼로리:</strong> ${food.calories} kcal</p>
            <p><strong>단백질:</strong> ${food.protein} g</p>
            <p><strong>지방:</strong> ${food.fat} g</p>
            <p><strong>탄수화물:</strong> ${food.carbohydrates} g</p>
            <p style="margin-top: 15px;">${food.description}</p>
        `;
        modal.style.display = "block";
    }

    spanClose.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById('search-button').addEventListener('click', function() {
        const foodName = document.getElementById('food-input').value;
        
        const foodData = foodList.find(food => food.name === foodName);

        if (foodData) {
            openModal(foodData);
        } else {
            alert("해당 음식을 찾을 수 없습니다.");
        }
    });
});

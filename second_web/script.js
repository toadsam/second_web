document.addEventListener('DOMContentLoaded', function() {
    const foodList = [
        {
            name: "케일",
            image: "https://example.com/kale.jpg",  // 실제 이미지 URL로 대체하세요
            rating: 5,
            description: "케일은 비타민과 미네랄이 풍부한 슈퍼푸드입니다."
        },
        {
            name: "당근",
            image: "https://example.com/carrot.jpg",  // 실제 이미지 URL로 대체하세요
            rating: 4.5,
            description: "당근은 눈 건강에 좋은 베타카로틴이 풍부합니다."
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
                <h3>${food.name}</h3>
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
            <p style="margin-top: 10px;"><strong>설명:</strong> ${food.description}</p>
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

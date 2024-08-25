document.addEventListener('DOMContentLoaded', function() {
    const foodList = [
        {
            name: "전설의 킨킨치킨",
            image: "음식사진들/킨킨.jpg",  // 실제 이미지 URL로 대체하세요
            rating: { price: 5, taste: 5, nutrition: 2 },  // 가성비, 맛, 영양성분 별점
            description: "진짜 정재훈 인생 역대급 닭강정",
            oneLineSummary: "진짜 정재훈 인생 역대급 닭강정"
        },
        {
            name: "요아정(초코쉘, 그래놀라, 벌집 꿀, 치즈 큐브 추가)",
            image: "음식사진들/요아정.jpg",  // 실제 이미지 URL로 대체하세요
            rating: { price: 1, taste: 5, nutrition: 1 },  // 가성비, 맛, 영양성분 별점
            description: "당근은 눈 건강에 좋은 베타카로틴이 풍부합니다.",
            oneLineSummary: "아직은 안 먹어봤지만 누가 봐도 맛있을 것 같아"
        },
        {
            name: "맘스터치 휠렛버거",
            image: "음식사진들/휠랫.jpg",  // 실제 이미지 URL로 대체하세요
            rating: { price: 5, taste: 3, nutrition: 5 },  // 가성비, 맛, 영양성분 별점
            description: "당근은 눈 건강에 좋은 베타카로틴이 풍부합니다.",
            oneLineSummary: "햄버거 1티어 다이어트 버거"
        },
        {
            name: "붕이치킨",
            image: "음식사진들/붕이치킨.jpg",  // 실제 이미지 URL로 대체하세요
            rating: { price: 5, taste: 4, nutrition: 3 },  // 가성비, 맛, 영양성분 별점
            description: "당근은 눈 건강에 좋은 베타카로틴이 풍부합니다.",
            oneLineSummary: "킨킨의 등장 전까지는 1등이었던 치킨"
        },
        {
            name: "오늘의 초밥",
            image: "음식사진들/오초.jpg",  // 실제 이미지 URL로 대체하세요
            rating: { price: 1, taste: 5, nutrition: 4 },  // 가성비, 맛, 영양성분 별점
            description: "당근은 눈 건강에 좋은 베타카로틴이 풍부합니다.",
            oneLineSummary: "진짜 줄서서 먹어야 하는 초밥"
        },
        {
            name: "꾸브라고 숯불치킨",
            image: "음식사진들/꾸브라고.jpg",  // 실제 이미지 URL로 대체하세요
            rating: { price: 3, taste: 5, nutrition: 4 },  // 가성비, 맛, 영양성분 별점
            description: "당근은 눈 건강에 좋은 베타카로틴이 풍부합니다.",
            oneLineSummary: "리뷰이벤트 떡 추가하면 진짜 짱 많이 줌"
        }
        ,
        {
            name: "정재훈 다이어트 식단",
            image: "음식사진들/정재훈 다이어트식 식단.jpg",  // 실제 이미지 URL로 대체하세요
            rating: { price: 5, taste: 0, nutrition: 5 },  // 가성비, 맛, 영양성분 별점
            description: "당근은 눈 건강에 좋은 베타카로틴이 풍부합니다.",
            oneLineSummary: "우엑"
        }
        ,
        {
            name: "디저트39",
            image: "음식사진들/디삼구.jpg",  // 실제 이미지 URL로 대체하세요
            rating: { price: 2, taste: 5, nutrition: 5 },  // 가성비, 맛, 영양성분 별점
            description: "당근은 눈 건강에 좋은 베타카로틴이 풍부합니다.",
            oneLineSummary: "저칼로리 음식 많아요(저칼로리 청포도 스무디 짱)"
        }
        ,
        {
            name: "치킨플러스(제로슈가)",
            image: "음식사진들/있을슈가없당.jpg",  // 실제 이미지 URL로 대체하세요
            rating: { price: 3, taste: 4, nutrition: 3 },  // 가성비, 맛, 영양성분 별점
            description: "당근은 눈 건강에 좋은 베타카로틴이 풍부합니다.",
            oneLineSummary: "제로슈가 치킨 귀하다"
        }
        ,
        {
            name: "홈플러스 연어",
            image: "음식사진들/홈플러스연어.jpg",  // 실제 이미지 URL로 대체하세요
            rating: { price: 3, taste: 5, nutrition: 5 },  // 가성비, 맛, 영양성분 별점
            description: "당근은 눈 건강에 좋은 베타카로틴이 풍부합니다.",
            oneLineSummary: "홈플러스 회원가 연어 300g 14900원"
        }
        // 추가 음식 데이터
    ];

    const foodListDiv = document.getElementById('food-list');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const spanClose = document.getElementsByClassName('close')[0];
    const wishlistModal = document.getElementById('wishlist-modal');
    const wishlistBody = document.getElementById('wishlist-body');
    const spanCloseWishlist = document.getElementsByClassName('close-wishlist')[0];

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // 음식 목록을 페이지에 추가
    foodList.forEach(food => {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');

        // 별점 생성
        const starsPrice = '★'.repeat(food.rating.price) + '☆'.repeat(5 - food.rating.price);
        const starsTaste = '★'.repeat(food.rating.taste) + '☆'.repeat(5 - food.rating.taste);
        const starsNutrition = '★'.repeat(food.rating.nutrition) + '☆'.repeat(5 - food.rating.nutrition);

        // 음식 항목의 HTML 구조
        foodItem.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <div class="food-info">
                <h3>${food.name}</h3>
                <p>${food.oneLineSummary}</p>
                <div class="ratings">
                    <div><strong>가성비:</strong> <span class="star-rating">${starsPrice}</span></div>
                    <div><strong>맛:</strong> <span class="star-rating">${starsTaste}</span></div>
                    <div><strong>영양성분:</strong> <span class="star-rating">${starsNutrition}</span></div>
                </div>
            </div>
            <span class="heart-icon ${wishlist.includes(food.name) ? 'filled' : ''}">❤</span>
        `;

        // 찜 아이콘 클릭 이벤트
        foodItem.querySelector('.heart-icon').addEventListener('click', () => {
            toggleWishlist(food.name);
            updateWishlistUI();
        });

        // 음식 항목 클릭 이벤트
        foodItem.addEventListener('click', (e) => {
            if (!e.target.classList.contains('heart-icon')) {
                openModal(food);  // 로컬 데이터로 모달 창 열기
            }
        });

        foodListDiv.appendChild(foodItem);
    });

    // 모달 창 열기 함수 (로컬 데이터 사용)
    function openModal(food) {
        modalBody.innerHTML = `
            <h2>${food.name}</h2>
            <img src="${food.image}" alt="${food.name}" style="width: 100%; height: auto; margin-top: 10px;">
            <p style="margin-top: 10px;"><strong>설명:</strong> ${food.description}</p>
            <p style="margin-top: 10px;"><strong>추가 정보:</strong> ${food.additionalInfo}</p>
        `;
        modal.style.display = "block";
    }

    // 찜 목록 업데이트
    function toggleWishlist(foodName) {
        if (wishlist.includes(foodName)) {
            wishlist = wishlist.filter(name => name !== foodName);
        } else {
            wishlist.push(foodName);
        }
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }

    function updateWishlistUI() {
        const hearts = document.querySelectorAll('.heart-icon');
        hearts.forEach(heart => {
            const foodName = heart.parentElement.querySelector('h3').innerText;
            if (wishlist.includes(foodName)) {
                heart.classList.add('filled');
            } else {
                heart.classList.remove('filled');
            }
        });

        // 찜 목록 링크 업데이트
        document.getElementById('wishlist-link').innerText = `찜 목록 (${wishlist.length})`;

        // 찜 목록 모달 업데이트
        wishlistBody.innerHTML = wishlist.length > 0 ? 
            wishlist.map(name => `<p>${name}</p>`).join('') :
            '<p>찜 목록이 비어 있습니다.</p>';
    }

    // 찜 목록 모달 열기
    document.getElementById('wishlist-link').addEventListener('click', () => {
        wishlistModal.style.display = "block";
    });

    // 모달 창 닫기 버튼 클릭 이벤트
    spanClose.onclick = function() {
        modal.style.display = "none";
    };

    spanCloseWishlist.onclick = function() {
        wishlistModal.style.display = "none";
    };

    // 모달 창 바깥 클릭 시 닫기
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        if (event.target == wishlistModal) {
            wishlistModal.style.display = "none";
        }
    };

    // 초기 UI 업데이트
    updateWishlistUI();
});

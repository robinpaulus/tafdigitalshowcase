/* =====================================================
   TAF DIGITAL SHOWCASE
   MASTER SCRIPT
   Prototype / Dummy Data
===================================================== */


/* =====================================================
   DATA KENDARAAN
===================================================== */

const vehicleData = {

    avanza: {
        name: "Toyota Avanza 2022",
        price: "Rp 175.000.000",
        mileage: "67.000 km",
        transmission: "Automatic",
        fuel: "Bensin",
        color: "Putih",
        brand: "Toyota",
        model: "Avanza",
        year: "2022",
        type: "1.5 G",
        condition: "Baik",
        showroom: "VIP Cars Mobilindo - Palembang",

        images: [
            "assets/vehicles/avanza/1.png",
            "assets/vehicles/avanza/2.png",
            "assets/vehicles/avanza/3.png",
            "assets/vehicles/avanza/4.png"
        ]
    },


    xpander: {
        name: "Mitsubishi Xpander 2023",
        price: "Rp 210.000.000",
        mileage: "45.000 km",
        transmission: "Automatic",
        fuel: "Bensin",
        color: "Hitam",
        brand: "Mitsubishi",
        model: "Xpander",
        year: "2023",
        type: "Ultimate",
        condition: "Baik",
        showroom: "Auto 77 Palembang",

        images: [
            "assets/vehicles/xpander/1.png",
            "assets/vehicles/xpander/2.png",
            "assets/vehicles/xpander/3.png",
            "assets/vehicles/xpander/4.png"
        ]
    },


    rush: {
        name: "Toyota Rush 2022",
        price: "Rp 205.000.000",
        mileage: "52.000 km",
        transmission: "Automatic",
        fuel: "Bensin",
        color: "Silver",
        brand: "Toyota",
        model: "Rush",
        year: "2022",
        type: "1.5 TRD Sportivo",
        condition: "Baik",
        showroom: "Partner Showroom TAF",

        images: [
            "assets/vehicles/rush/1.png",
            "assets/vehicles/rush/2.png",
            "assets/vehicles/rush/3.png",
            "assets/vehicles/rush/4.png"
        ]
    },


    brio: {
        name: "Honda Brio 2023",
        price: "Rp 165.000.000",
        mileage: "38.000 km",
        transmission: "Automatic",
        fuel: "Bensin",
        color: "Merah",
        brand: "Honda",
        model: "Brio",
        year: "2023",
        type: "RS",
        condition: "Baik",
        showroom: "Partner Showroom TAF",

        images: [
            "assets/vehicles/brio/1.png",
            "assets/vehicles/brio/2.png",
            "assets/vehicles/brio/3.png",
            "assets/vehicles/brio/4.png"
        ]
    }

};


/* =====================================================
   GENERAL HELPER
===================================================== */

function parseVehiclePrice(price) {

    if (typeof price === "number") {
        return price;
    }

    return Number(
        String(price)
            .replace(/Rp/g, "")
            .replace(/\./g, "")
            .replace(/,/g, "")
            .trim()
    ) || 0;

}


function formatRupiah(number) {

    return (
        "Rp " +
        Math.round(
            Number(number) || 0
        ).toLocaleString("id-ID")
    );

}


function formatLeadCurrency(value) {

    const number = Number(value);

    if (isNaN(number)) {
        return "-";
    }

    return formatRupiah(number);

}


function formatLeadDetailDate(dateString) {

    if (!dateString) {
        return "-";
    }

    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        return "-";
    }

    return date.toLocaleDateString(
        "id-ID",
        {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }
    );

}


function formatLeadDate(dateString) {

    if (!dateString) {
        return "-";
    }

    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        return "-";
    }

    return date.toLocaleDateString(
        "id-ID",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMobileMenu() {

    const navigation =
        document.querySelector(".navigation");

    if (navigation) {

        navigation.classList.toggle("show");

    }

}


function toggleMenu() {

    const navigation =
        document.getElementById("navigation");

    if (navigation) {

        navigation.classList.toggle("show");

    }

}


/* =====================================================
   HOME - CATEGORY FILTER
===================================================== */

function filterCategory(category, button) {

    const cards =
        document.querySelectorAll(
            ".vehicle-card"
        );

    const buttons =
        document.querySelectorAll(
            ".category"
        );

    const emptyState =
        document.getElementById(
            "emptyState"
        );

    let visibleCount = 0;


    buttons.forEach(
        function(item) {

            item.classList.remove(
                "active"
            );

        }
    );


    if (button) {

        button.classList.add(
            "active"
        );

    }


    cards.forEach(
        function(card) {

            const cardCategory =
                card.dataset.category;


            if (
                category === "Semua" ||
                cardCategory === category
            ) {

                card.style.display = "";
                visibleCount++;

            } else {

                card.style.display = "none";

            }

        }
    );


    if (!emptyState) {
        return;
    }


    if (visibleCount === 0) {

        emptyState.style.display =
            "block";

    } else {

        emptyState.style.display =
            "none";

    }

}


/* =====================================================
   HOME - SEARCH VEHICLE
===================================================== */

function searchVehicle() {

    const input =
        document.getElementById(
            "searchInput"
        );

    const cards =
        document.querySelectorAll(
            ".vehicle-card"
        );

    const emptyState =
        document.getElementById(
            "emptyState"
        );


    if (!input) {
        return;
    }


    const keyword =
        input.value
            .toLowerCase()
            .trim();


    let visibleCount = 0;


    cards.forEach(
        function(card) {

            const name =
                card.dataset.name
                    ? card.dataset.name.toLowerCase()
                    : "";


            if (
                name.includes(keyword) ||
                keyword === ""
            ) {

                card.style.display = "";
                visibleCount++;

            } else {

                card.style.display = "none";

            }

        }
    );


    if (!emptyState) {
        return;
    }


    if (visibleCount === 0) {

        emptyState.style.display =
            "block";

    } else {

        emptyState.style.display =
            "none";

    }

}

/* =====================================================
   VEHICLE DETAIL
===================================================== */

function loadVehicleDetail() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const vehicleKey =
        params.get("vehicle");

    const vehicle =
        vehicleData[vehicleKey];


    if (!vehicle) {
        console.warn(
            "Data kendaraan tidak ditemukan:",
            vehicleKey
        );
        return;
    }


    /*
       LOAD GAMBAR KENDARAAN
       Dipanggil setelah data kendaraan ditemukan
    */
    loadVehicleImages(vehicle);


    const vehicleName =
        document.getElementById(
            "vehicle-name"
        );

    const vehiclePrice =
        document.getElementById(
            "vehicle-price"
        );


    if (vehicleName) {

        vehicleName.textContent =
            vehicle.name;

    }


    if (vehiclePrice) {

        vehiclePrice.textContent =
            vehicle.price;

    }


    const vehicleMileage =
        document.getElementById(
            "vehicle-mileage"
        );

    const vehicleTransmission =
        document.getElementById(
            "vehicle-transmission"
        );

    const vehicleFuel =
        document.getElementById(
            "vehicle-fuel"
        );

    const vehicleColor =
        document.getElementById(
            "vehicle-color"
        );


    if (vehicleMileage) {

        vehicleMileage.textContent =
            vehicle.mileage;

    }


    if (vehicleTransmission) {

        vehicleTransmission.textContent =
            vehicle.transmission;

    }


    if (vehicleFuel) {

        vehicleFuel.textContent =
            vehicle.fuel;

    }


    if (vehicleColor) {

        vehicleColor.textContent =
            vehicle.color;

    }


    const vehicleModel =
        document.getElementById(
            "vehicle-model"
        );

    const vehicleYear =
        document.getElementById(
            "vehicle-year"
        );

    const vehicleType =
        document.getElementById(
            "vehicle-type"
        );

    const vehicleInformationColor =
        document.getElementById(
            "vehicle-information-color"
        );

    const vehicleCondition =
        document.getElementById(
            "vehicle-condition"
        );

    const vehicleShowroom =
        document.getElementById(
            "vehicle-showroom"
        );


    if (vehicleModel) {

        vehicleModel.textContent =
            vehicle.brand +
            " " +
            vehicle.model;

    }


    if (vehicleYear) {

        vehicleYear.textContent =
            vehicle.year;

    }


    if (vehicleType) {

        vehicleType.textContent =
            vehicle.type;

    }


    if (vehicleInformationColor) {

        vehicleInformationColor.textContent =
            vehicle.color;

    }


    if (vehicleCondition) {

        vehicleCondition.textContent =
            vehicle.condition;

    }


    if (vehicleShowroom) {

        vehicleShowroom.textContent =
            vehicle.showroom;

    }

}


/* =====================================================
   VEHICLE IMAGES
===================================================== */

function loadVehicleImages(vehicle) {

    if (
        !vehicle ||
        !Array.isArray(vehicle.images) ||
        vehicle.images.length === 0
    ) {

        console.warn(
            "Data gambar kendaraan tidak ditemukan."
        );

        return;
    }


    console.log(
        "Images:",
        vehicle.images
    );


    /* ================================
       MAIN IMAGE
    ================================= */

    const mainImage =
        document.getElementById(
            "vehicle-main-image"
        );


    if (mainImage) {

        mainImage.src =
            vehicle.images[0];

        mainImage.alt =
            "Foto " +
            vehicle.name;

    }


    /* ================================
       THUMBNAIL IMAGES
    ================================= */

    vehicle.images.forEach(
        function(image, index) {

            const thumbnail =
                document.getElementById(
                    "vehicle-thumbnail-" +
                    index
                );


            if (!thumbnail) {
                return;
            }


            thumbnail.src =
                image;

            thumbnail.alt =
                "Foto " +
                vehicle.name +
                " " +
                (index + 1);

        }
    );


    /* ================================
       ACTIVE THUMBNAIL
    ================================= */

    const thumbnails =
        document.querySelectorAll(
            ".thumbnail"
        );


    thumbnails.forEach(
        function(thumbnail, index) {

            if (index === 0) {

                thumbnail.classList.add(
                    "active"
                );

            } else {

                thumbnail.classList.remove(
                    "active"
                );

            }

        }
    );

}

/* =====================================================
   SELECT VEHICLE IMAGE
===================================================== */

function selectVehicleImage(index) {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const vehicleKey =
        params.get("vehicle");

    if (!vehicleKey) {
        return;
    }


    const vehicle =
        vehicleData[vehicleKey];

    if (
        !vehicle ||
        !Array.isArray(vehicle.images)
    ) {
        return;
    }


    const selectedImage =
        vehicle.images[index];

    if (!selectedImage) {
        return;
    }


    /* ================================
       GANTI GAMBAR BESAR
    ================================= */

    const mainImage =
        document.getElementById(
            "vehicle-main-image"
        );

    if (!mainImage) {
        return;
    }


    mainImage.src =
        selectedImage;

    mainImage.alt =
        "Foto " +
        vehicle.name +
        " " +
        (index + 1);


    /* ================================
       UPDATE THUMBNAIL ACTIVE
    ================================= */

    const thumbnails =
        document.querySelectorAll(
            ".thumbnail"
        );


    thumbnails.forEach(
        function(thumbnail) {

            thumbnail.classList.remove(
                "active"
            );

        }
    );


    const selectedThumbnail =
        document.querySelector(
            '.thumbnail[data-image-index="' +
            index +
            '"]'
        );


    if (selectedThumbnail) {

        selectedThumbnail.classList.add(
            "active"
        );

    }

}

/* =====================================================
   FAVORITE
===================================================== */

function toggleFavorite(button) {

    if (!button) {
        return;
    }


    button.classList.toggle(
        "favorite-active"
    );


    const isFavorite =
        button.classList.contains(
            "favorite-active"
        );


    if (isFavorite) {

        button.textContent = "♥";

        button.setAttribute(
            "aria-label",
            "Hapus dari favorit"
        );

    } else {

        button.textContent = "♡";

        button.setAttribute(
            "aria-label",
            "Tambahkan ke favorit"
        );

    }

}


/* =====================================================
   DETAIL - SIMULATION LINK
===================================================== */

function setupSimulationLink() {

    const simulationLink =
        document.getElementById(
            "simulation-link"
        );


    if (!simulationLink) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const vehicleKey =
        params.get("vehicle");


    if (!vehicleKey) {
        return;
    }


    localStorage.setItem(
        "tafSimulationVehicle",
        vehicleKey
    );


    simulationLink.href =
        "simulasi.html?vehicle=" +
        encodeURIComponent(
            vehicleKey
        );

}


/* =====================================================
   SIMULATION PAGE
===================================================== */

function loadSimulationPage() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const vehicleKey =
        params.get("vehicle");


    const vehicle =
        vehicleData[vehicleKey];


    if (!vehicle) {
        return;
    }


    localStorage.setItem(
        "tafSimulationVehicle",
        vehicleKey
    );


    const fields = {

        name:
            document.getElementById(
                "simulation-vehicle-name"
            ),

        price:
            document.getElementById(
                "simulation-vehicle-price"
            ),

        showroom:
            document.getElementById(
                "simulation-vehicle-showroom"
            ),

        brand:
            document.getElementById(
                "simulation-brand"
            ),

        model:
            document.getElementById(
                "simulation-model"
            ),

        type:
            document.getElementById(
                "simulation-type"
            ),

        year:
            document.getElementById(
                "simulation-year"
            ),

        mileage:
            document.getElementById(
                "simulation-vehicle-mileage"
            ),

        transmission:
            document.getElementById(
                "simulation-vehicle-transmission"
            ),

        fuel:
            document.getElementById(
                "simulation-vehicle-fuel"
            ),

        color:
            document.getElementById(
                "simulation-color"
            )

    };


    if (fields.name) {

        fields.name.textContent =
            vehicle.name;

    }


    if (fields.price) {

        fields.price.textContent =
            vehicle.price;

    }


    if (fields.showroom) {

        fields.showroom.textContent =
            vehicle.showroom;

    }


    if (fields.brand) {

        fields.brand.textContent =
            vehicle.brand;

    }


    if (fields.model) {

        fields.model.textContent =
            vehicle.model;

    }


    if (fields.type) {

        fields.type.textContent =
            vehicle.type;

    }


    if (fields.year) {

        fields.year.textContent =
            vehicle.year;

    }


    if (fields.mileage) {

        fields.mileage.textContent =
            vehicle.mileage;

    }


    if (fields.transmission) {

        fields.transmission.textContent =
            vehicle.transmission;

    }


    if (fields.fuel) {

        fields.fuel.textContent =
            vehicle.fuel;

    }


    if (fields.color) {

        fields.color.textContent =
            vehicle.color;

    }


    const otrInput =
        document.getElementById(
            "simulation-otr"
        );


    if (otrInput) {

        otrInput.value =
            formatRupiah(
                parseVehiclePrice(
                    vehicle.price
                )
            );

    }


    const dpInput =
        document.getElementById(
            "dp"
        );


    if (dpInput) {

        dpInput.oninput =
            updateNewSimulationPreview;

    }


    const tenorInput =
        document.getElementById(
            "tenor"
        );


    if (tenorInput) {

        tenorInput.onchange =
            updateNewSimulationPreview;

    }


    const insuranceInput =
        document.getElementById(
            "insurance"
        );


    if (insuranceInput) {

        insuranceInput.onchange =
            updateNewSimulationPreview;

    }


    const branchInput =
        document.getElementById(
            "branch"
        );


    if (branchInput) {

        branchInput.onchange =
            updateNewSimulationPreview;

    }


    const backToDetail =
        document.getElementById(
            "back-to-detail"
        );


    if (backToDetail) {

        backToDetail.href =
            "detail-unit.html?vehicle=" +
            encodeURIComponent(
                vehicleKey
            );

    }


    updateNewSimulationPreview();

}


/* =====================================================
   SIMULATION PREVIEW
===================================================== */

function updateNewSimulationPreview() {

    const vehicleKey =
        localStorage.getItem(
            "tafSimulationVehicle"
        );


    if (!vehicleKey) {
        return;
    }


    const vehicle =
        vehicleData[vehicleKey];


    if (!vehicle) {
        return;
    }


    const vehiclePrice =
        parseVehiclePrice(
            vehicle.price
        );


    const dpInput =
        document.getElementById(
            "dp"
        );


    const dpPercentage =
        Number(
            dpInput
                ? dpInput.value
                : 20
        ) || 20;


    const dpAmount =
        vehiclePrice *
        (dpPercentage / 100);


    const financing =
        vehiclePrice -
        dpAmount;


    const dpRupiah =
        document.getElementById(
            "dp-rupiah"
        );


    const previewDp =
        document.getElementById(
            "preview-dp"
        );


    const previewFinancing =
        document.getElementById(
            "preview-financing"
        );


    if (dpRupiah) {

        dpRupiah.value =
            formatRupiah(
                dpAmount
            );

    }


    if (previewDp) {

        previewDp.textContent =
            formatRupiah(
                dpAmount
            );

    }


    if (previewFinancing) {

        previewFinancing.textContent =
            formatRupiah(
                financing
            );

    }

}


/* =====================================================
   INSURANCE PROTOTYPE
===================================================== */

const simulationInsuranceRate = {

    comprehensive: {

        12: 0.0255,
        24: 0.0297,
        36: 0.0297,
        48: 0.0297,
        60: 0.0297

    },

    tlo: {

        12: 0.0084,
        24: 0.0102,
        36: 0.0102,
        48: 0.0102,
        60: 0.0102

    }

};


const simulationDepreciation = {

    12: 1.00,
    24: 0.80,
    36: 0.80,
    48: 0.70,
    60: 0.70

};


function getInsuranceRate(
    insuranceType,
    tenor
) {

    if (
        simulationInsuranceRate[
            insuranceType
        ] &&
        simulationInsuranceRate[
            insuranceType
        ][tenor]
    ) {

        return simulationInsuranceRate[
            insuranceType
        ][tenor];

    }


    return 0;

}


function calculateInsuranceCoverage(
    otrNett,
    tenor
) {

    const factor =
        simulationDepreciation[
            tenor
        ] || 1;


    return (
        otrNett *
        factor
    );

}


function calculateInsurancePremium(
    otrNett,
    tenor,
    insuranceType
) {

    if (
        insuranceType ===
        "comprehensive"
    ) {

        const coverage =
            calculateInsuranceCoverage(
                otrNett,
                tenor
            );


        const rate =
            getInsuranceRate(
                "comprehensive",
                tenor
            );


        return {

            coverage:
                coverage,

            rate:
                rate,

            premium:
                coverage * rate

        };

    }


    if (
        insuranceType ===
        "tlo"
    ) {

        const coverage =
            calculateInsuranceCoverage(
                otrNett,
                tenor
            );


        const rate =
            getInsuranceRate(
                "tlo",
                tenor
            );


        return {

            coverage:
                coverage,

            rate:
                rate,

            premium:
                coverage * rate

        };

    }


    if (
        insuranceType ===
        "combine"
    ) {

        const comprehensiveRate =
            getInsuranceRate(
                "comprehensive",
                12
            );


        const tloRate =
            getInsuranceRate(
                "tlo",
                tenor
            );


        const firstYearCoverage =
            calculateInsuranceCoverage(
                otrNett,
                12
            );


        const remainingCoverage =
            calculateInsuranceCoverage(
                otrNett,
                tenor
            );


        const firstYearPremium =
            firstYearCoverage *
            comprehensiveRate;


        const remainingPremium =
            remainingCoverage *
            tloRate;


        return {

            coverage:
                firstYearCoverage,

            rate:
                comprehensiveRate,

            premium:
                firstYearPremium +
                remainingPremium

        };

    }


    return {

        coverage: 0,

        rate: 0,

        premium: 0

    };

}


/* =====================================================
   SUBMIT SIMULATION
===================================================== */

function submitSimulation() {

    const vehicleKey =
        localStorage.getItem(
            "tafSimulationVehicle"
        );


    if (!vehicleKey) {

        alert(
            "Unit kendaraan tidak ditemukan."
        );

        return;

    }


    const vehicle =
        vehicleData[vehicleKey];


    if (!vehicle) {

        alert(
            "Data kendaraan tidak ditemukan."
        );

        return;

    }


    const dpInput =
        document.getElementById(
            "dp"
        );


    const tenorInput =
        document.getElementById(
            "tenor"
        );


    const insuranceInput =
        document.getElementById(
            "insurance"
        );


    const branchInput =
        document.getElementById(
            "branch"
        );


    const dp =
        Number(
            dpInput
                ? dpInput.value
                : 20
        );


    const tenor =
        Number(
            tenorInput
                ? tenorInput.value
                : 60
        );


    const insurance =
        insuranceInput
            ? insuranceInput.value
            : "";


    const branch =
        branchInput
            ? branchInput.value
            : "";


    if (dp < 15) {

        alert(
            "Uang muka minimum 15%."
        );

        return;

    }


    if (!insurance) {

        alert(
            "Silakan pilih jenis asuransi."
        );

        return;

    }


    if (!branch) {

        alert(
            "Silakan pilih Branch TAF."
        );

        return;

    }


    const vehiclePrice =
        parseVehiclePrice(
            vehicle.price
        );


    const dpAmount =
        vehiclePrice *
        (dp / 100);


    const financing =
        vehiclePrice -
        dpAmount;


    const insuranceResult =
        calculateInsurancePremium(
            vehiclePrice,
            tenor,
            insurance
        );


    const insurancePremium =
        insuranceResult.premium;


    const ph =
        financing +
        insurancePremium;


    /*
     * Prototype estimation only.
     * Bukan bunga resmi TAF.
     */

    const estimatedRate =
        0.08;


    const estimatedInterest =
        ph *
        estimatedRate *
        (tenor / 12);


    const estimatedTotal =
        ph +
        estimatedInterest;


    const estimatedInstallment =
        estimatedTotal /
        tenor;


    const tdp =
        dpAmount;


    const simulationData = {

        vehicle:
            vehicleKey,

        vehicleName:
            vehicle.name,

        vehiclePrice:
            vehiclePrice,

        brand:
            vehicle.brand,

        model:
            vehicle.model,

        type:
            vehicle.type,

        year:
            vehicle.year,

        mileage:
            vehicle.mileage,

        transmission:
            vehicle.transmission,

        fuel:
            vehicle.fuel,

        color:
            vehicle.color,

        showroom:
            vehicle.showroom,

        dpPercentage:
            dp,

        dpAmount:
            dpAmount,

        tenor:
            tenor,

        insurance:
            insurance,

        insuranceProvider:
            "Asuransi Astra",

        insuranceCoverage:
            insuranceResult.coverage,

        insuranceRate:
            insuranceResult.rate,

        insurancePremium:
            insurancePremium,

        branch:
            branch,

        financing:
            financing,

        ph:
            ph,

        tdp:
            tdp,

        estimatedRate:
            estimatedRate,

        estimatedInterest:
            estimatedInterest,

        estimatedTotal:
            estimatedTotal,

        estimatedInstallment:
            estimatedInstallment,

        createdAt:
            new Date().toISOString()

    };


    localStorage.setItem(
        "tafSimulation",
        JSON.stringify(
            simulationData
        )
    );


    window.location.href =
        "hasil-simulasi.html";

}


/* =====================================================
   HASIL SIMULASI
===================================================== */

function loadSimulationResult() {

    const storedSimulation =
        localStorage.getItem(
            "tafSimulation"
        );


    if (!storedSimulation) {

        console.warn(
            "Data simulasi belum tersedia."
        );

        return;

    }


    let simulation;


    try {

        simulation =
            JSON.parse(
                storedSimulation
            );

    } catch (error) {

        console.error(
            "Data simulasi tidak dapat dibaca:",
            error
        );

        return;

    }


    const vehicle =
        vehicleData[
            simulation.vehicle
        ];


    if (!vehicle) {
        return;
    }


    const vehicleName =
        document.getElementById(
            "result-vehicle-name"
        );


    const vehiclePrice =
        document.getElementById(
            "result-vehicle-price"
        );


    const vehicleMileage =
        document.getElementById(
            "result-vehicle-mileage"
        );


    const vehicleTransmission =
        document.getElementById(
            "result-vehicle-transmission"
        );


    const vehicleFuel =
        document.getElementById(
            "result-vehicle-fuel"
        );


    if (vehicleName) {

        vehicleName.textContent =
            vehicle.name;

    }


    if (vehiclePrice) {

        vehiclePrice.textContent =
            formatRupiah(
                simulation.vehiclePrice
            );

    }


    if (vehicleMileage) {

        vehicleMileage.textContent =
            vehicle.mileage;

    }


    if (vehicleTransmission) {

        vehicleTransmission.textContent =
            vehicle.transmission;

    }


    if (vehicleFuel) {

        vehicleFuel.textContent =
            vehicle.fuel;

    }


    const resultPrice =
        document.getElementById(
            "result-price"
        );


    const resultDp =
        document.getElementById(
            "result-dp"
        );


    const resultFinancing =
        document.getElementById(
            "result-financing-detail"
        );


    const resultTenor =
        document.getElementById(
            "result-tenor"
        );


    const resultPh =
        document.getElementById(
            "result-ph"
        );


    const resultTdp =
        document.getElementById(
            "result-tdp"
        );


    const resultInterest =
        document.getElementById(
            "result-interest"
        );


    const resultInsurance =
        document.getElementById(
            "result-insurance"
        );


    const resultInstallment =
        document.getElementById(
            "result-installment"
        );


    if (resultPrice) {

        resultPrice.textContent =
            formatRupiah(
                simulation.vehiclePrice
            );

    }


    if (resultDp) {

        resultDp.textContent =
            formatRupiah(
                simulation.dpAmount
            );

    }


    if (resultFinancing) {

        resultFinancing.textContent =
            formatRupiah(
                simulation.financing
            );

    }


    if (resultTenor) {

        resultTenor.textContent =
            simulation.tenor +
            " Bulan";

    }


    if (resultPh) {

        resultPh.textContent =
            formatRupiah(
                simulation.ph
            );

    }


    if (resultTdp) {

        resultTdp.textContent =
            formatRupiah(
                simulation.tdp
            );

    }


    if (resultInterest) {

        resultInterest.textContent =
            (
                simulation.estimatedRate *
                100
            ).toFixed(2) +
            "% Estimasi";

    }


    if (resultInsurance) {

        let insuranceName =
            simulation.insurance;


        if (
            simulation.insurance ===
            "comprehensive"
        ) {

            insuranceName =
                "Comprehensive";

        }


        if (
            simulation.insurance ===
            "combine"
        ) {

            insuranceName =
                "Combine";

        }


        if (
            simulation.insurance ===
            "tlo"
        ) {

            insuranceName =
                "TLO";

        }


        resultInsurance.textContent =
            insuranceName +
            " - " +
            (
                simulation.insuranceProvider ||
                "Asuransi Astra"
            );

    }


    if (resultInstallment) {

        resultInstallment.textContent =
            formatRupiah(
                simulation.estimatedInstallment
            ) +
            " / bulan";

    }


    const backToSimulation =
        document.getElementById(
            "back-to-simulation"
        );


    if (backToSimulation) {

        backToSimulation.href =
            "simulasi.html?vehicle=" +
            encodeURIComponent(
                simulation.vehicle
            );

    }


    const changeSimulation =
        document.getElementById(
            "change-simulation"
        );


    if (changeSimulation) {

        changeSimulation.href =
            "simulasi.html?vehicle=" +
            encodeURIComponent(
                simulation.vehicle
            );

    }

}


/* =====================================================
   SUBMIT LEAD
===================================================== */

function submitLead() {

    const storedSimulation =
        localStorage.getItem(
            "tafSimulation"
        );


    if (!storedSimulation) {

        alert(
            "Data simulasi tidak ditemukan."
        );

        return;

    }


    let simulation;


    try {

        simulation =
            JSON.parse(
                storedSimulation
            );

    } catch (error) {

        alert(
            "Data simulasi tidak valid."
        );

        return;

    }


    if (
        !simulation ||
        !simulation.vehicle
    ) {

        alert(
            "Unit kendaraan tidak ditemukan."
        );

        return;

    }


    window.location.href =
        "customer-info.html";

}


/* =====================================================
   CUSTOMER INFORMATION
===================================================== */

function loadCustomerInfo() {

    const storedSimulation =
        localStorage.getItem(
            "tafSimulation"
        );


    if (!storedSimulation) {

        alert(
            "Data simulasi tidak ditemukan."
        );

        window.location.href =
            "index.html";

        return;

    }


    let simulation;


    try {

        simulation =
            JSON.parse(
                storedSimulation
            );

    } catch (error) {

        alert(
            "Data simulasi tidak valid."
        );

        return;

    }


    const vehicle =
        vehicleData[
            simulation.vehicle
        ];


    if (!vehicle) {

        alert(
            "Data kendaraan tidak ditemukan."
        );

        return;

    }


    const vehicleName =
        document.getElementById(
            "customer-vehicle-name"
        );


    const vehiclePrice =
        document.getElementById(
            "customer-vehicle-price"
        );


    const customerDp =
        document.getElementById(
            "customer-dp"
        );


    const customerTenor =
        document.getElementById(
            "customer-tenor"
        );


    if (vehicleName) {

        vehicleName.textContent =
            vehicle.name;

    }


    if (vehiclePrice) {

        vehiclePrice.textContent =
            formatRupiah(
                simulation.vehiclePrice
            );

    }


    if (customerDp) {

        customerDp.textContent =
            formatRupiah(
                simulation.dpAmount
            );

    }


    if (customerTenor) {

        customerTenor.textContent =
            simulation.tenor +
            " Bulan";

    }


    const backToResult =
        document.getElementById(
            "back-to-result"
        );


    if (backToResult) {

        backToResult.href =
            "hasil-simulasi.html";

    }


    const branchInput =
        document.getElementById(
            "customer-branch"
        );


    if (
        branchInput &&
        simulation.branch
    ) {

        branchInput.value =
            simulation.branch;

    }


    const customerForm =
        document.getElementById(
            "customer-form"
        );


    if (!customerForm) {
        return;
    }


    /*
     * Gunakan onsubmit supaya tidak terjadi
     * duplicate event listener.
     */

    customerForm.onsubmit =
        function(event) {

            event.preventDefault();


            const nameElement =
                document.getElementById(
                    "customer-name"
                );


            const phoneElement =
                document.getElementById(
                    "customer-phone"
                );


            const emailElement =
                document.getElementById(
                    "customer-email"
                );


            const cityElement =
                document.getElementById(
                    "customer-city"
                );


            const purposeElement =
                document.getElementById(
                    "customer-purpose"
                );


            const branchElement =
                document.getElementById(
                    "customer-branch"
                );


            const consentElement =
                document.getElementById(
                    "customer-consent"
                );


            const name =
                nameElement
                    ? nameElement.value.trim()
                    : "";


            const phone =
                phoneElement
                    ? phoneElement.value.trim()
                    : "";


            const email =
                emailElement
                    ? emailElement.value.trim()
                    : "";


            const city =
                cityElement
                    ? cityElement.value
                    : "";


            const purpose =
                purposeElement
                    ? purposeElement.value
                    : "";


            const branch =
                branchElement
                    ? branchElement.value
                    : "";


            const consent =
                consentElement
                    ? consentElement.checked
                    : false;


            if (!name) {

                alert(
                    "Silakan isi nama lengkap."
                );

                return;

            }


            if (!phone) {

                alert(
                    "Silakan isi nomor WhatsApp."
                );

                return;

            }


            if (!city) {

                alert(
                    "Silakan pilih kota domisili."
                );

                return;

            }


            if (!branch) {

                alert(
                    "Silakan pilih cabang TAF."
                );

                return;

            }


            if (!purpose) {

                alert(
                    "Silakan pilih kebutuhan."
                );

                return;

            }


            if (!consent) {

                alert(
                    "Silakan setujui bahwa TAF dapat menghubungi kamu."
                );

                return;

            }


            /*
             * ==================================
             * CREATE LEAD
             * ==================================
             */

            const leadData = {

                id:
                    "LEAD-" +
                    Date.now(),

                vehicle:
                    simulation.vehicle,

                vehicleName:
                    vehicle.name,

                vehiclePrice:
                    simulation.vehiclePrice,

                showroom:
                    vehicle.showroom,

                dp:
                    simulation.dpPercentage,

                dpAmount:
                    simulation.dpAmount,

                tenor:
                    simulation.tenor,

                insurance:
                    simulation.insurance,

                insuranceProvider:
                    simulation.insuranceProvider,

                insuranceCoverage:
                    simulation.insuranceCoverage,

                insuranceRate:
                    simulation.insuranceRate,

                insurancePremium:
                    simulation.insurancePremium,

                financing:
                    simulation.financing,

                ph:
                    simulation.ph,

                tdp:
                    simulation.tdp,

                estimatedRate:
                    simulation.estimatedRate,

                estimatedInterest:
                    simulation.estimatedInterest,

                estimatedTotal:
                    simulation.estimatedTotal,

                estimatedInstallment:
                    simulation.estimatedInstallment,

                branch:
                    branch,

                customerName:
                    name,

                customerPhone:
                    phone,

                customerEmail:
                    email,

                customerCity:
                    city,

                customerBranch:
                    branch,

                customerPurpose:
                    purpose,

                status:
                    "New Lead",

                createdAt:
                    new Date().toISOString(),

                lastFollowup:
                    null,

                nextAction:
                    "Initial follow-up",

                followupNote:
                    "",

                followupHistory:
                    []

            };


            /*
             * ==================================
             * GET EXISTING LEADS
             * ==================================
             */

            let leads = [];


            const storedLeads =
                localStorage.getItem(
                    "tafLeads"
                );


            if (storedLeads) {

                try {

                    leads =
                        JSON.parse(
                            storedLeads
                        );


                    if (
                        !Array.isArray(
                            leads
                        )
                    ) {

                        leads = [];

                    }

                } catch (error) {

                    console.error(
                        "Data lead lama tidak dapat dibaca:",
                        error
                    );

                    leads = [];

                }

            }


            /*
             * ==================================
             * ADD NEW CUSTOMER
             * ==================================
             */

            leads.push(
                leadData
            );


            /*
             * ==================================
             * SAVE ALL LEADS
             * ==================================
             */

            localStorage.setItem(
                "tafLeads",
                JSON.stringify(
                    leads
                )
            );


            /*
             * Lead terakhir untuk Success Page
             */

            localStorage.setItem(
                "tafLead",
                JSON.stringify(
                    leadData
                )
            );


            /*
             * ==================================
             * SUCCESS
             * ==================================
             */

            window.location.href =
                "success.html";

        };

}

const continueApplicationButton =
    document.getElementById("continue-application-button");

if (continueApplicationButton) {
    continueApplicationButton.addEventListener(
        "click",
        submitLead
    );
}

/* =====================================================
   SUCCESS PAGE
===================================================== */

function loadSuccessPage() {

    const storedLead =
        localStorage.getItem(
            "tafLead"
        );


    if (!storedLead) {

        console.warn(
            "Data lead belum tersedia."
        );

        return;

    }


    let lead;


    try {

        lead =
            JSON.parse(
                storedLead
            );

    } catch (error) {

        console.error(
            "Data lead tidak dapat dibaca:",
            error
        );

        return;

    }


    const customerName =
        document.getElementById(
            "success-customer-name"
        );


    const customerNameDetail =
        document.getElementById(
            "success-customer-name-detail"
        );


    if (customerName) {

        customerName.textContent =
            lead.customerName ||
            "Customer";

    }


    if (customerNameDetail) {

        customerNameDetail.textContent =
            lead.customerName ||
            "-";

    }


    const phone =
        document.getElementById(
            "success-customer-phone"
        );


    if (phone) {

        phone.textContent =
            lead.customerPhone ||
            "-";

    }


    const email =
        document.getElementById(
            "success-customer-email"
        );


    if (email) {

        email.textContent =
            lead.customerEmail ||
            "-";

    }


    const city =
        document.getElementById(
            "success-customer-city"
        );


    if (city) {

        city.textContent =
            lead.customerCity ||
            "-";

    }


    const branch =
        document.getElementById(
            "success-customer-branch"
        );


    if (branch) {

        branch.textContent =
            lead.customerBranch ||
            lead.branch ||
            "-";

    }


    const purpose =
        document.getElementById(
            "success-customer-purpose"
        );


    if (purpose) {

        purpose.textContent =
            lead.customerPurpose ||
            "-";

    }


    const vehicleName =
        document.getElementById(
            "success-vehicle-name"
        );


    if (vehicleName) {

        vehicleName.textContent =
            lead.vehicleName ||
            "-";

    }


    const vehiclePrice =
        document.getElementById(
            "success-vehicle-price"
        );


    if (vehiclePrice) {

        vehiclePrice.textContent =
            formatRupiah(
                lead.vehiclePrice
            );

    }


    const successDp =
        document.getElementById(
            "success-dp"
        );


    if (successDp) {

        successDp.textContent =
            formatRupiah(
                lead.dpAmount
            ) +
            " (" +
            lead.dp +
            "%)";

    }


    const successTenor =
        document.getElementById(
            "success-tenor"
        );


    if (successTenor) {

        successTenor.textContent =
            lead.tenor +
            " Bulan";

    }


    const successFinancing =
        document.getElementById(
            "success-financing"
        );


    if (successFinancing) {

        successFinancing.textContent =
            formatRupiah(
                lead.financing
            );

    }


    const successInstallment =
        document.getElementById(
            "success-installment"
        );


    if (successInstallment) {

        successInstallment.textContent =
            formatRupiah(
                lead.estimatedInstallment
            ) +
            " / bulan";

    }


    const successInsurance =
        document.getElementById(
            "success-insurance"
        );


    if (successInsurance) {

        let insuranceText =
            lead.insurance ||
            "-";


        if (
            lead.insuranceProvider
        ) {

            insuranceText +=
                " - " +
                lead.insuranceProvider;

        }


        successInsurance.textContent =
            insuranceText;

    }

}


/* =====================================================
   SO LOGIN
===================================================== */

function setupSOLogin() {

    const loginForm =
        document.getElementById(
            "so-login-form"
        );


    if (!loginForm) {
        return;
    }


    loginForm.onsubmit =
        function(event) {

            event.preventDefault();


            const soIdElement =
                document.getElementById(
                    "so-id"
                );


            const passwordElement =
                document.getElementById(
                    "so-password"
                );


            const soId =
                soIdElement
                    ? soIdElement.value.trim()
                    : "";


            const password =
                passwordElement
                    ? passwordElement.value
                    : "";


            const validSOId =
                "SO001";


            const validPassword =
                "TAF2026";


            if (
                soId === validSOId &&
                password === validPassword
            ) {

                localStorage.setItem(
                    "soLoggedIn",
                    "true"
                );


                localStorage.setItem(
                    "soId",
                    soId
                );


                window.location.href =
                    "dashboard.html";

            } else {

                alert(
                    "ID Sales Officer atau password salah."
                );

            }

        };

}


/* =====================================================
   DASHBOARD - GET LEADS
===================================================== */

function getStoredLead() {

    const storedLeads =
        localStorage.getItem(
            "tafLeads"
        );


    if (!storedLeads) {
        return [];
    }


    try {

        const leads =
            JSON.parse(
                storedLeads
            );


        if (
            !Array.isArray(
                leads
            )
        ) {

            return [];

        }


        return leads;

    } catch (error) {

        console.error(
            "Data lead tidak dapat dibaca:",
            error
        );


        return [];

    }

}


/* =====================================================
   DASHBOARD - STATUS CLASS
===================================================== */

function getLeadStatusClass(status) {

    if (
        status === "Contacted"
    ) {

        return "status-contacted";

    }


    if (
        status === "Qualified Prospect"
    ) {

        return "status-qualified";

    }


    if (
        status === "Simulation"
    ) {

        return "status-simulation";

    }


    if (
        status === "App-In"
    ) {

        return "status-appin";

    }


    if (
        status === "Approved" ||
        status === "Valid/DO" ||
        status === "UF"
    ) {

        return "status-approved";

    }


    if (
        status === "Lost Opportunity"
    ) {

        return "status-lost";

    }


    return "";

}


/* =====================================================
   DASHBOARD - TOTAL LEAD
===================================================== */

function updateTotalLead() {

    const leads =
        getStoredLead();


    /*
     * TOTAL LEAD =
     * jumlah seluruh customer yang sudah
     * masuk ke TAF Digital Showcase.
     */

    const totalLead =
        leads.length;


    /*
     * querySelectorAll digunakan supaya
     * aman jika ada lebih dari satu elemen
     * dengan ID total-lead.
     */

    const totalLeadElements =
        document.querySelectorAll(
            "#total-lead"
        );


    totalLeadElements.forEach(
        function(element) {

            element.textContent =
                totalLead;

        }
    );


    console.log(
        "TOTAL CUSTOMER / LEAD:",
        totalLead
    );

}


/* =====================================================
   DASHBOARD - RENDER TABLE
===================================================== */

function renderLeadDashboard() {

    const tableBody =
        document.getElementById(
            "lead-table-body"
        );


    if (!tableBody) {
        return;
    }


    const emptyState =
        document.getElementById(
            "lead-empty-state"
        );


    const emptyStateAlternative =
        document.getElementById(
            "lead-empty"
        );


    const leadCount =
        document.getElementById(
            "lead-count"
        );


    const searchInput =
        document.getElementById(
            "lead-search-input"
        );


    const statusFilter =
        document.getElementById(
            "lead-status-filter"
        );


    const leads =
        getStoredLead();


    /*
     * TOTAL LEAD TIDAK TERPENGARUH
     * SEARCH / FILTER.
     */

    updateTotalLead();


    const searchValue =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    const selectedStatus =
        statusFilter
            ? statusFilter.value
            : "all";


    const filteredLeads =
        leads.filter(
            function(lead) {

                const searchableText = [

                    lead.customerName,

                    lead.customerPhone,

                    lead.vehicleName,

                    lead.customerCity,

                    lead.customerPurpose,

                    lead.showroom

                ]
                .join(" ")
                .toLowerCase();


                const matchesSearch =
                    !searchValue ||
                    searchableText.includes(
                        searchValue
                    );


                const matchesStatus =
                    selectedStatus === "all" ||
                    selectedStatus === "" ||
                    lead.status === selectedStatus;


                return (
                    matchesSearch &&
                    matchesStatus
                );

            }
        );


    tableBody.innerHTML =
        "";


    if (leadCount) {

        leadCount.textContent =
            filteredLeads.length;

    }


    if (
        filteredLeads.length === 0
    ) {

        if (emptyState) {

            emptyState.style.display =
                "block";

        }


        if (emptyStateAlternative) {

            emptyStateAlternative.style.display =
                "block";

        }


        return;

    }


    if (emptyState) {

        emptyState.style.display =
            "none";

    }


    if (emptyStateAlternative) {

        emptyStateAlternative.style.display =
            "none";

    }


    filteredLeads.forEach(
        function(lead) {

            const status =
                lead.status ||
                "New Lead";


            const statusClass =
                getLeadStatusClass(
                    status
                );


            const row =
                document.createElement(
                    "tr"
                );


            row.innerHTML = `

                <td>

                    <div class="lead-customer">

                        <strong>
                            ${lead.customerName || "-"}
                        </strong>

                        <span>
                            ${lead.customerPhone || "-"}
                        </span>

                    </div>

                </td>


                <td>

                    <div class="lead-unit">

                        <strong>
                            ${lead.vehicleName || "-"}
                        </strong>

                        <span>
                            ${formatLeadCurrency(
                                lead.vehiclePrice
                            )}
                        </span>

                    </div>

                </td>


                <td>
                    ${lead.showroom || "-"}
                </td>


                <td>

                    <div class="lead-simulation">

                        <strong>
                            DP ${lead.dp || "-"}%
                        </strong>

                        <span>
                            ${lead.tenor || "-"} Bulan
                        </span>

                    </div>

                </td>


                <td>

                    <span
                        class="lead-status-badge ${statusClass}"
                    >
                        ${status}
                    </span>

                </td>


                <td>

                    <a
                        href="lead-detail.html?id=${encodeURIComponent(
                            lead.id
                        )}"
                        class="lead-detail-button"
                    >
                        Lihat Detail
                    </a>

                </td>

            `;


            tableBody.appendChild(
                row
            );

        }
    );

}


/* =====================================================
   DASHBOARD - KPI
===================================================== */

function updateDashboardKPI() {

    const leads =
        getStoredLead();


    const counts = {

        "New Lead": 0,

        "Contacted": 0,

        "Qualified Prospect": 0,

        "Simulation": 0,

        "App-In": 0,

        "Approved": 0,

        "Valid/DO": 0,

        "UF": 0,

        "Lost Opportunity": 0

    };


    leads.forEach(
        function(lead) {

            const status =
                lead.status ||
                "New Lead";


            if (
                Object.prototype.hasOwnProperty.call(
                    counts,
                    status
                )
            ) {

                counts[status]++;

            }

        }
    );


    function setKPI(
        id,
        value
    ) {

        const element =
            document.getElementById(
                id
            );


        if (element) {

            element.textContent =
                value;

        }

    }


    setKPI(
        "kpi-new-lead",
        counts["New Lead"]
    );


    setKPI(
        "kpi-contacted",
        counts["Contacted"]
    );


    setKPI(
        "kpi-qualified-prospect",
        counts["Qualified Prospect"]
    );


    setKPI(
        "kpi-simulation",
        counts["Simulation"]
    );


    /*
     * Mendukung ID lama maupun baru.
     */

    setKPI(
        "kpi-app-in",
        counts["App-In"]
    );


    setKPI(
        "kpi-appin",
        counts["App-In"]
    );


    setKPI(
        "kpi-approved",
        counts["Approved"]
    );


    setKPI(
        "kpi-valid-do",
        counts["Valid/DO"]
    );


    setKPI(
        "kpi-uf",
        counts["UF"]
    );


    setKPI(
        "kpi-lost-opportunity",
        counts["Lost Opportunity"]
    );

}


/* =====================================================
   DASHBOARD - SEARCH & FILTER
===================================================== */

function setupDashboardFilters() {

    const searchInput =
        document.getElementById(
            "lead-search-input"
        );


    const statusFilter =
        document.getElementById(
            "lead-status-filter"
        );


    if (searchInput) {

        searchInput.oninput =
            function() {

                renderLeadDashboard();

            };

    }


    if (statusFilter) {

        statusFilter.onchange =
            function() {

                renderLeadDashboard();

            };

    }

}


/* =====================================================
   LEAD DETAIL - GET LEAD
===================================================== */

function getLeadById() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const leadId =
        params.get("id");


    if (!leadId) {
        return null;
    }


    const leads =
        getStoredLead();


    return leads.find(
        function(lead) {

            return (
                lead.id === leadId
            );

        }
    ) || null;

}


/* =====================================================
   LEAD DETAIL - LOAD
===================================================== */

function loadLeadDetail() {

    const lead =
        getLeadById();


    if (!lead) {

        alert(
            "Data lead tidak ditemukan."
        );


        window.location.href =
            "dashboard.html";


        return;

    }


    /*
     * CUSTOMER
     */

    const customerFields = {

        name:
            document.getElementById(
                "lead-customer-name"
            ),

        phone:
            document.getElementById(
                "lead-customer-phone"
            ),

        email:
            document.getElementById(
                "lead-customer-email"
            ),

        city:
            document.getElementById(
                "lead-customer-city"
            ),

        purpose:
            document.getElementById(
                "lead-customer-purpose"
            ),

        created:
            document.getElementById(
                "lead-created-date"
            )

    };


    if (customerFields.name) {

        customerFields.name.textContent =
            lead.customerName || "-";

    }


    if (customerFields.phone) {

        customerFields.phone.textContent =
            lead.customerPhone || "-";

    }


    if (customerFields.email) {

        customerFields.email.textContent =
            lead.customerEmail || "-";

    }


    if (customerFields.city) {

        customerFields.city.textContent =
            lead.customerCity || "-";

    }


    if (customerFields.purpose) {

        customerFields.purpose.textContent =
            lead.customerPurpose || "-";

    }


    if (customerFields.created) {

        customerFields.created.textContent =
            formatLeadDetailDate(
                lead.createdAt
            );

    }


    /*
     * VEHICLE
     */

    const vehicleName =
        document.getElementById(
            "lead-vehicle-name"
        );


    const vehiclePrice =
        document.getElementById(
            "lead-vehicle-price"
        );


    if (vehicleName) {

        vehicleName.textContent =
            lead.vehicleName || "-";

    }


    if (vehiclePrice) {

        vehiclePrice.textContent =
            formatLeadCurrency(
                lead.vehiclePrice
            );

    }


    /*
     * SHOWROOM
     */

    const showroom =
        document.getElementById(
            "lead-showroom"
        );


    if (showroom) {

        showroom.textContent =
            lead.showroom || "-";

    }


    /*
     * SIMULATION
     */

    const simulationPrice =
        document.getElementById(
            "lead-simulation-price"
        );


    const simulationDp =
        document.getElementById(
            "lead-simulation-dp"
        );


    const simulationTenor =
        document.getElementById(
            "lead-simulation-tenor"
        );


    const simulationFinancing =
        document.getElementById(
            "lead-simulation-financing"
        );


    if (simulationPrice) {

        simulationPrice.textContent =
            formatLeadCurrency(
                lead.vehiclePrice
            );

    }


    if (simulationDp) {

        if (
            lead.dpAmount !== undefined &&
            lead.dpAmount !== null
        ) {

            simulationDp.textContent =
                formatLeadCurrency(
                    lead.dpAmount
                ) +
                " (" +
                (lead.dp || 0) +
                "%)";

        } else {

            simulationDp.textContent =
                (lead.dp || 0) +
                "%";

        }

    }


    if (simulationTenor) {

        simulationTenor.textContent =
            (lead.tenor || "-") +
            " Bulan";

    }


    if (simulationFinancing) {

        simulationFinancing.textContent =
            lead.financing !== undefined
                ? formatLeadCurrency(
                    lead.financing
                )
                : "-";

    }


    /*
     * STATUS
     */

    const statusSelect =
        document.getElementById(
            "lead-status-select"
        );


    if (statusSelect) {

        statusSelect.value =
            lead.status ||
            "New Lead";

    }


    updateLeadStatusBadge(
        lead.status ||
        "New Lead"
    );


    /*
     * FOLLOW-UP SUMMARY
     */

    const lastFollowup =
        document.getElementById(
            "lead-last-followup"
        );


    const nextAction =
        document.getElementById(
            "lead-next-action"
        );


    if (lastFollowup) {

        lastFollowup.textContent =
            lead.lastFollowup
                ? formatLeadDetailDate(
                    lead.lastFollowup
                )
                : "Belum ada follow-up";

    }


    if (nextAction) {

        nextAction.textContent =
            lead.nextAction ||
            "Initial follow-up";

    }


    /*
     * RIWAYAT FOLLOW-UP
     */

    renderLeadFollowupHistory(
        lead
    );

}


/* =====================================================
   LEAD DETAIL - STATUS BADGE
===================================================== */

function updateLeadStatusBadge(status) {

    const badge =
        document.getElementById(
            "lead-status-badge"
        );


    if (!badge) {
        return;
    }


    badge.textContent =
        status ||
        "New Lead";

}


/* =====================================================
   LEAD DETAIL - UPDATE STATUS
===================================================== */

function updateLeadStatus() {

    const lead =
        getLeadById();


    if (!lead) {

        alert(
            "Data lead tidak ditemukan."
        );

        return;

    }


    const statusSelect =
        document.getElementById(
            "lead-status-select"
        );


    if (!statusSelect) {
        return;
    }


    const newStatus =
        statusSelect.value;


    const leads =
        getStoredLead();


    const leadIndex =
        leads.findIndex(
            function(item) {

                return (
                    item.id === lead.id
                );

            }
        );


    if (leadIndex === -1) {

        alert(
            "Lead tidak ditemukan."
        );

        return;

    }


    leads[leadIndex].status =
        newStatus;


    localStorage.setItem(
        "tafLeads",
        JSON.stringify(
            leads
        )
    );


    updateLeadStatusBadge(
        newStatus
    );


    /*
     * Update dashboard jika dibuka
     * dari halaman yang sama.
     */

    updateDashboardKPI();


    alert(
        "Status lead berhasil diperbarui."
    );

}


/* =====================================================
   FOLLOW-UP - ESCAPE TEXT
===================================================== */

function escapeLeadFollowupText(
    text
) {

    if (
        text === null ||
        text === undefined
    ) {

        return "";

    }


    return String(text)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* =====================================================
   FOLLOW-UP - SAVE
===================================================== */

function saveLeadFollowup() {

    const lead =
        getLeadById();


    if (!lead) {

        alert(
            "Data lead tidak ditemukan."
        );

        return;

    }


    const noteElement =
        document.getElementById(
            "lead-followup-note"
        );


    if (!noteElement) {

        alert(
            "Kolom catatan follow-up tidak ditemukan."
        );

        return;

    }


    const note =
        noteElement.value.trim();


    if (!note) {

        alert(
            "Silakan isi catatan follow-up terlebih dahulu."
        );

        return;

    }


    const leads =
        getStoredLead();


    const leadIndex =
        leads.findIndex(
            function(item) {

                return (
                    item.id === lead.id
                );

            }
        );


    if (leadIndex === -1) {

        alert(
            "Lead tidak ditemukan."
        );

        return;

    }


    /*
     * Buat array history jika belum ada.
     */

    if (
        !Array.isArray(
            leads[leadIndex]
                .followupHistory
        )
    ) {

        leads[leadIndex]
            .followupHistory = [];

    }


    /*
     * Buat aktivitas baru.
     */

    const followupData = {

        date:
            new Date().toISOString(),

        note:
            note,

        nextAction:
            "Follow-up lanjutan"

    };


    /*
     * Masukkan ke history.
     */

    leads[leadIndex]
        .followupHistory
        .push(
            followupData
        );


    /*
     * Update summary terakhir.
     */

    leads[leadIndex]
        .lastFollowup =
        followupData.date;


    leads[leadIndex]
        .followupNote =
        note;


    leads[leadIndex]
        .nextAction =
        followupData.nextAction;


    /*
     * Simpan kembali.
     */

    localStorage.setItem(
        "tafLeads",
        JSON.stringify(
            leads
        )
    );


    /*
     * Update tanggal terakhir.
     */

    const lastFollowup =
        document.getElementById(
            "lead-last-followup"
        );


    if (lastFollowup) {

        lastFollowup.textContent =
            formatLeadDetailDate(
                followupData.date
            );

    }


    /*
     * Update next action.
     */

    const nextAction =
        document.getElementById(
            "lead-next-action"
        );


    if (nextAction) {

        nextAction.textContent =
            followupData.nextAction;

    }


    /*
     * Render history.
     */

    renderLeadFollowupHistory(
        leads[leadIndex]
    );


    /*
     * Kosongkan textarea.
     */

    noteElement.value =
        "";


    alert(
        "Follow-up berhasil disimpan."
    );

}


/* =====================================================
   FOLLOW-UP - HISTORY
===================================================== */

function renderLeadFollowupHistory(
    lead
) {

    const historyContainer =
        document.getElementById(
            "lead-followup-history-list"
        );


    if (!historyContainer) {
        return;
    }


    let history =
        Array.isArray(
            lead.followupHistory
        )
            ? lead.followupHistory
            : [];


    /*
     * MIGRASI DATA LAMA
     *
     * Kalau sebelumnya hanya memiliki
     * followupNote, tetap tampilkan.
     */

    if (
        history.length === 0 &&
        lead.followupNote
    ) {

        history = [

            {

                date:
                    lead.lastFollowup ||
                    lead.createdAt,

                note:
                    lead.followupNote,

                nextAction:
                    lead.nextAction ||
                    "Follow-up lanjutan"

            }

        ];

    }


    /*
     * Belum ada history.
     */

    if (
        history.length === 0
    ) {

        historyContainer.innerHTML = `

            <div class="lead-followup-empty">

                Belum ada riwayat follow-up.

                <br>

                Simpan hasil komunikasi pertama
                untuk mulai mencatat aktivitas customer.

            </div>

        `;

        return;

    }


    /*
     * History terbaru ditampilkan
     * paling atas.
     */

    const sortedHistory =
        [
            ...history
        ].reverse();


    historyContainer.innerHTML =
        sortedHistory
            .map(
                function(item) {

                    return `

                        <div
                            class="lead-followup-history-item"
                        >

                            <div class="lead-followup-history-meta">

                                <span class="lead-followup-history-date">${formatLeadDetailDate(item.date)}</span>

                                <span class="lead-followup-history-action">
                                    Next Action: ${escapeLeadFollowupText(item.nextAction || "Follow-up lanjutan")}
                                </span>

                            </div>


                            <p class="lead-followup-history-note">${escapeLeadFollowupText(item.note)}

                            </p>

                        </div>

                    `;

                }
            )
            .join("");

}


/* =====================================================
   CONTACT SHOWROOM
===================================================== */

function contactShowroom() {

    alert(
        "Fitur Hubungi Showroom masih berupa prototype.\n\n" +
        "Inquiry customer dapat diteruskan menjadi " +
        "TAF Lead untuk proses follow-up."
    );

}


/* =====================================================
   START SIMULATION FALLBACK
===================================================== */

function startSimulation() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const vehicleKey =
        params.get("vehicle");


    if (vehicleKey) {

        window.location.href =
            "simulasi.html?vehicle=" +
            encodeURIComponent(
                vehicleKey
            );

        return;

    }


    alert(
        "Unit kendaraan belum dipilih."
    );

}


/* =====================================================
   OPEN DETAIL FALLBACK
===================================================== */

function openDetail(
    vehicleName
) {

    console.log(
        "Detail kendaraan:",
        vehicleName
    );

}


/* =====================================================
   INITIALIZATION
   SATU BLOK SAJA
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /*
         * HOME / DETAIL
         */

        loadVehicleDetail();


        /*
         * SIMULATION
         */

        loadSimulationPage();


        setupSimulationLink();


        /*
         * HASIL SIMULASI
         */

        if (
            document.getElementById(
                "result-vehicle-name"
            )
        ) {

            loadSimulationResult();

        }


        /*
         * CUSTOMER INFORMATION
         */

        if (
            document.getElementById(
                "customer-form"
            )
        ) {

            loadCustomerInfo();

        }


        /*
         * SUCCESS
         */

        if (
            document.getElementById(
                "success-vehicle-name"
            )
        ) {

            loadSuccessPage();

        }


        /*
         * DASHBOARD
         */

        if (
            document.getElementById(
                "lead-table-body"
            )
        ) {

            renderLeadDashboard();

            updateDashboardKPI();

            updateTotalLead();

            setupDashboardFilters();

        }


        /*
         * LEAD DETAIL
         */

        if (
            document.getElementById(
                "lead-customer-name"
            )
        ) {

            loadLeadDetail();

        }


        /*
         * SO LOGIN
         */

        setupSOLogin();

    }
);
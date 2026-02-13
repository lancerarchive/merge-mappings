let mergedJson = null;

// Cursor Tracking Logic
const dot = document.getElementById('cursorDot');
const outline = document.getElementById('cursorOutline');

window.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    outline.animate({ left: e.clientX + 'px', top: e.clientY + 'px' }, { duration: 400, fill: "forwards" });
});

// Link interactivity for cursor
document.querySelectorAll('button, .drop-card, a').forEach(el => {
    el.onmouseenter = () => outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
    el.onmouseleave = () => outline.style.transform = 'translate(-50%, -50%) scale(1)';
});

// File Setup
const f1 = document.getElementById('fileInput1');
const f2 = document.getElementById('fileInput2');

document.getElementById('dropZone1').onclick = () => f1.click();
document.getElementById('dropZone2').onclick = () => f2.click();

f1.onchange = (e) => document.getElementById('fileName1').textContent = e.target.files[0].name;
f2.onchange = (e) => document.getElementById('fileName2').textContent = e.target.files[0].name;

// Logic: Merge Function
document.getElementById('mergeBtn').onclick = async () => {
    if (!f1.files[0] || !f2.files[0]) return alert("Select both files first.");

    const json1 = JSON.parse(await f1.files[0].text());
    const json2 = JSON.parse(await f2.files[0].text());

    mergedJson = { ...json1 };
    
    // Merge Logic (deduplicating custom_model_data)
    if (json2.items) {
        for (let type in json2.items) {
            if (!mergedJson.items[type]) {
                mergedJson.items[type] = json2.items[type];
            } else {
                const existingIds = new Set(mergedJson.items[type].map(i => i.custom_model_data));
                const newItems = json2.items[type].filter(i => !existingIds.has(i.custom_model_data));
                mergedJson.items[type] = [...mergedJson.items[type], ...newItems];
            }
        }
    }

    // Update UI
    document.getElementById('statsSection').style.visibility = 'visible';
    document.getElementById('previewSection').style.display = 'block';
    document.getElementById('downloadBtn').disabled = false;
    document.getElementById('jsonPreview').textContent = JSON.stringify(mergedJson, null, 2);
    
    // Quick Count
    let total = 0;
    for (let key in mergedJson.items) total += mergedJson.items[key].length;
    document.getElementById('totalItems').textContent = total;
    document.getElementById('uniqueTypes').textContent = Object.keys(mergedJson.items).length;
};

document.getElementById('downloadBtn').onclick = () => {
    const blob = new Blob([JSON.stringify(mergedJson, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "merged_mappings.json";
    link.click();
};

document.getElementById('clearBtn').onclick = () => location.reload();
const client = require('./client');

async function createResident_Card({
    name,
    apartment,
    move_in_date,
    rent,
    lease_term,
    sent_approval_docs,
    sent_lease,
    received_electric,
    received_insurance,
    received_signed_lease,
    received_payment,
    notes,
    moved_in,
    user_id
}) {
    
    const {
        rows: [resident_card],
    } = await client.query(
        `
    INSERT INTO resident_card (name, apartment, move_in_date, rent, lease_term, sent_approval_docs, sent_lease, received_electric, received_insurance, received_signed_lease, received_payment, notes, moved_in, "user_id") 
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) 
    RETURNING *;
    `,
        [name, apartment, move_in_date, rent, lease_term, sent_approval_docs, sent_lease, received_electric, received_insurance, received_signed_lease, received_payment, notes, moved_in, user_id]
    );

    return resident_card;
}

async function getAllResident_Cards() {
    const { rows: resident_cards } = await client.query(`
    SELECT * FROM resident_card;
    `);

    return resident_cards;
}

async function getResident_CardById(id) {
    const {
        rows: [resident_card],
    } = await client.query(
        `
    SELECT * FROM resident_card
    WHERE id=${id};
  `);

    return resident_card;
}

async function getResident_CardByName(name) {
    const {
        rows: [resident_card],
    } = await client.query(
        `
    SELECT * FROM resident_card
    WHERE name=$1;
    `,
        [name]
    );

    return resident_card;
}

async function updateResident_Card({
    id,
    name,
    apartment,
    move_in_date,
    rent,
    lease_term,
    sent_approval_docs,
    sent_lease,
    received_electric,
    received_insurance,
    received_signed_lease,
    received_payment,
    notes,
    moved_in,
    user_id}) {

    const {
        rows: [resident_card],
    } = await client.query(
        `
      UPDATE resident_card
      SET name=$1, apartment=$2, move_in_date=$3, rent=$4, lease_term=$5, sent_approval_docs=$6, sent_lease=$7, received_electric=$8, received_insurance=$9, received_signed_lease=$10, received_payment=$11, notes=$12, moved_in=$13, "user_id"=$14
      WHERE id=${id}
      RETURNING *;
    `,
        [name,
            apartment,
            move_in_date,
            rent,
            lease_term,
            sent_approval_docs,
            sent_lease,
            received_electric,
            received_insurance,
            received_signed_lease,
            received_payment,
            notes,
            moved_in,
            user_id]
    );

    return resident_card;
}



async function updateApprovalDocs({
    id,
    sent_approval_docs
}) {

    const {
        rows: [resident_card],
    } = await client.query(
        `
      UPDATE resident_card
      SET sent_approval_docs=$1
      WHERE id=${id}
      RETURNING *;
    `,
        [sent_approval_docs]
    );

    return resident_card;
}

async function updateSentLease({
    id,
    sent_lease
}) {
    const {
        rows: [resident_card],
    } = await client.query(
        `
      UPDATE resident_card
      SET sent_lease=$1
      WHERE id=${id}
      RETURNING *;
    `,
        [sent_lease]
    );

    return resident_card;
}


async function updateReceivedElectric({
    id,
    received_electric
}) {

    const {
        rows: [resident_card],
    } = await client.query(
        `
      UPDATE resident_card
      SET received_electric=$1
      WHERE id=${id}
      RETURNING *;
    `,
        [received_electric]
    );

    return resident_card;
}

async function updateReceivedInsurance({
    id,
    received_insurance
}) {

    const {
        rows: [resident_card],
    } = await client.query(
        `
      UPDATE resident_card
      SET received_insurance=$1
      WHERE id=${id}
      RETURNING *;
    `,
        [received_insurance]
    );

    return resident_card;
}

async function updateReceivedSignedLease({
    id,
    received_signed_lease
}) {

    const {
        rows: [resident_card],
    } = await client.query(
        `
      UPDATE resident_card
      SET received_signed_lease=$1
      WHERE id=${id}
      RETURNING *;
    `,
        [received_signed_lease]
    );

    return resident_card;
}

async function updateReceivedPayment({
    id,
    received_payment
}) {

    const {
        rows: [resident_card],
    } = await client.query(
        `
      UPDATE resident_card
      SET received_payment=$1
      WHERE id=${id}
      RETURNING *;
    `,
        [received_payment]
    );

    return resident_card;
}

async function updateNotes({
    id,
    notes
}) {

    const {
        rows: [resident_card],
    } = await client.query(
        `
      UPDATE resident_card
      SET notes=$1
      WHERE id=${id}
      RETURNING *;
    `,
        [notes]
    );

    return resident_card;
}

async function updateMovedIn({
    id,
    moved_in
}) {

    const {
        rows: [resident_card],
    } = await client.query(
        `
      UPDATE resident_card
      SET moved_in=$1
      WHERE id=${id}
      RETURNING *;
    `,
        [moved_in]
    );

    return resident_card;
}

async function deleteResident_Card(id) {
    const {
        rows: [resident_card],
    } = await client.query(
        `
        DELETE FROM resident_card
        WHERE id = $1
        RETURNING *;
    `,
        [id]
    );

    return resident_card;
}

module.exports = {
    createResident_Card,
    getAllResident_Cards,
    getResident_CardById,
    getResident_CardByName,
    updateResident_Card,
    deleteResident_Card,
    updateApprovalDocs,
    updateSentLease,
    updateReceivedElectric,
    updateReceivedInsurance,
    updateReceivedSignedLease,
    updateReceivedPayment,
    updateNotes,
    updateMovedIn
};
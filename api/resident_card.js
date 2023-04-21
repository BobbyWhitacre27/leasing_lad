const express = require('express');
const apiRouter = express.Router();

const {
    createResident_Card,
    getAllResident_Cards,
    getResident_CardById,
    getResident_CardByName,
    updateResident_Card,
    deleteResident_Card,
    updateApprovalDocs
} = require('../db/resident_card');


// Get all cars
apiRouter.get('/', async (req, res, next) => {
    try {
        const resident_card = await getAllResident_Cards()

        res.send(
            resident_card
        )
    } catch (error) {
        next(error)
    }
});

// Add new car
apiRouter.post('/', async (req, res, next) => {
    try {
        const {
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
        } = req.body;

        const resident_card = await createResident_Card({
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
        })

        res.send(
            resident_card
        )
    } catch (error) {
        next(error)
    }
});

apiRouter.patch('/:resident_card_id', async (req, res, next) => {

    try {
        const id = req.params.resident_card_id;
        const {
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
        } = req.body;

        const updateResident_Card = await updateResident_Card({
            id: id,
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
        })

        res.send(
            updateResident_Card
        )
    } catch (error) {
        next(error)
    }
});

// update approval docs
apiRouter.patch('/:resident_card_id/approvaldocs', async (req, res, next) => {
    console.log("test")

    try {
        const id = req.params.resident_card_id;
        const {
            sent_approval_docs,
        } = req.body;

        const updateResident_Card = await updateApprovalDocs({
            id: id,
            sent_approval_docs
        })

        res.send(
            updateResident_Card
        )
    } catch (error) {
        next(error)
    }
});

apiRouter.delete('/:resident_card_id', async (req, res, next) => {
    try {
        const id = req.params.resident_card_id;
        const removeResident_Card = await deleteResident_Card(id);

        res.send(removeResident_Card);

    } catch (error) {
        next(error)
    }
});


module.exports = apiRouter;